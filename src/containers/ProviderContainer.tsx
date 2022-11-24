import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onGetAllProvidersReviewsRequested, onGetProviderInfoRequested, onGetProviderServicesRequested } from 'redux/actions/providers.actions';
import { onMakeReservationRequested } from 'redux/actions/user.actions';
import ProviderDetails from 'views/ProviderDetails/ProviderDetails';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';

const ProviderContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { providerData, providerServices, providerReviews } = useTypedSelector((state) => state.providers);

    const params = useParams();
    const providerId = params.id;

    const [hiredServices, setHiredServices] = useState<any>([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (providerId) {
            dispatch(onGetProviderInfoRequested(providerId));
            dispatch(onGetProviderServicesRequested(providerId));
            dispatch(onGetAllProvidersReviewsRequested(providerId));

        }
    }, [dispatch, providerId])

    useEffect(() => {
        const services = providerServices && providerServices.map((service: any) => {
            return ({
                ...service,
                duration: 0,
                isFixed: service.monetizationType === 'FIXED',
            });
        });
        setHiredServices(services);
    }, [providerServices]);

    const onMakeReservation = () => {
        const servicesToHire: any = [];

        hiredServices.map((service: any) => {
            if (service.duration > 0) {
                servicesToHire.push({
                    serviceId: service.id,
                    hours: service.duration,
                });
            }

        })

        const data = {
            userId: user.id,
            providerId: providerId,
            hiredServices: servicesToHire,
            date: date
        }
        console.log("🚀 ~ onMakeReservation ~ data", data)
        //dispatch(onMakeReservationRequested(data));
    }

    return (
        <Layout name={user && user.firstName}>
            {
                providerData && <ProviderDetails
                    provider={providerData}
                    providerServices={providerServices}
                    providerReviews={providerReviews}
                    hiredServices={hiredServices}
                    setHiredServices={setHiredServices}
                    onMakeReservation={onMakeReservation}
                    setDate={setDate}
                    date={date}
                />
            }
        </Layout>
    )
}

export default ProviderContainer;
