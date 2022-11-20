import React, { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { onGetProviderInfoRequested } from 'redux/actions/providers.actions';
import { onMakeReservationRequested } from 'redux/actions/user.actions';
import ProviderDetails from 'views/ProviderDetails/ProviderDetails';
import useTypedSelector from '../hooks/useTypedSelector';
import Layout from '../views/Layout/Layout';

const ProviderContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { user } = useTypedSelector((state) => state.user);
    const { providerData } = useTypedSelector((state) => state.providers);
    const params = useParams();
    const providerId = params.id;

    const [hiredServices, setHiredServices] = useState<any>([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (providerId) {
            dispatch(onGetProviderInfoRequested(providerId));
        }
    }, [dispatch, providerId])

    useEffect(() => {
        const services = providerData && providerData.services.map((service: any) => {
            return ({
                ...service,
                duration: 0,
                isFixed: service.monetizationType === 'fixed',
            });
        });
        setHiredServices(services);
    }, [providerData]);

    const onMakeReservation = () => {
        const data = {
            userId: user.id,
            providerId: providerId,
            reservedServices: hiredServices.map((service: any) => {
                return ({
                    serviceId: service.serviceId,
                    duration: service.duration,
                });
            }),
            date: date
        }
        dispatch(onMakeReservationRequested(data));
    }

    return (
        <Layout name={user && user.firstName}>
            {
                providerData && <ProviderDetails
                    provider={providerData}
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
