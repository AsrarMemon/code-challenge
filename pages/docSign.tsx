import React, { useEffect } from "react";
import type { NextPage } from 'next'
import { useDispatch, useSelector } from "react-redux";

import styles from '../styles/home.module.css'

import Image from 'next/image';
import SignImg from '../public/sign.svg';
import PenImg from '../public/pen.svg';
import RightUpArrow from '../public/right-up-arrow.svg'
import Export from '../public/export.svg'
import userImg from '../public/user.svg'
import DocSignDetails from '../components/docDetails';

import { getUserCount  } from "../redux/api/doc";

const DocSign: NextPage = () => {
    const userCounter = useSelector(({ doc }: any) => doc.userCount)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUserCount());
    }, [dispatch])

    return (
        <div>
            <div className={styles.header} />
            <div className={styles.logo} />
            <div className={styles.sign}>
                <Image src={SignImg} alt="sign-img"/>
            </div>
            <div className={styles.pen}>
                <Image src={PenImg} alt="pen-img" />
            </div>
            <div className={styles.shareBtn}>
                <div className={styles.shareBtnTxt}> <div className={styles.exportIcon}><Image src={Export} alt="exprt-image" /></div>  Share</div>
            </div>
            <div className={styles.subHeader}>
                <h1 className={styles.mainLabel}>Docu sign</h1>
                <p className={styles.subLabel}>sign smart contracts seamlessly</p>
                <a className={styles.anchar}>Utilities</a>
            </div>
            <div className={styles.firstSection}>
                <button className={styles.docFormButton}>Open <div className={styles.RightUpArrowStyle}><Image src={RightUpArrow}  alt="right-arrow-image"/></div></button>
                <div className={styles.friendIcon}>
                    <Image src={userImg} alt="user-img" />
                </div>
                <p className={styles.subLabel}>{userCounter.user} users</p>
            </div>
            <div style={{'paddingTop' : '15px'}}>
              <DocSignDetails />
            </div>
        </div>
    )
}

export default DocSign
