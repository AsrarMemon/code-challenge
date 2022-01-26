import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';

import Tab from '../styles/component/tab';
import Accordion from "../components/accordion";
import styles from '../styles/home.module.css'
import WorldImage from '../public/world.svg'

import { getActivity } from '../redux/api/doc'

const types = ["details", "activities"];


const DocSignDetails = () => {
    const [active, setActive] = useState(types[0]);
    const activityData = useSelector(({ doc }: any) => doc.data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivity());
    }, [dispatch])

    return (
        <>
            <div>
                {types && types.map((type: string) => (
                    <Tab
                        key={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tab>
                ))}
            </div>
            <p />
            {active === 'details' && <div>
                <Accordion
                    title="Overview"
                    content="it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly."
                />
                <div style={{'display': 'flex', 'paddingLeft': '18px'}}>
                    <div><Image src={WorldImage} alt="WorldImage" /></div>
                    <a className={styles.worldImageText}> https://docusignn.io</a>
                </div>
            </div>}
            {active === 'activities' && <div>
                <div>
                    <div className={styles.listItemTitle}>
                        <p >{activityData.count} Activity found</p>
                    </div>
                    <div >
                        {activityData && activityData.data.map((data: any, index: any) => (
                            <div key={'Key_' + index} className={styles.listItem}>
                                <div>
                                    <Image loader={({src}) => src} src={data.img} width={100} height={100} alt="no-image" className={styles.roundImage}  />
                                </div>
                                <div style={{ 'paddingLeft': '15px' }}>
                                    <p style={{ 'margin': 0 }}> <a className={styles.anchar}>{data.name}</a> {data.action}</p>
                                    <p style={{ 'margin': 0 }} className={styles.subLabel}>{data.date}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>}
        </>
    );
}

export default DocSignDetails