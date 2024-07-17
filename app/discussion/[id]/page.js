'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import Navbar from '../../components/Navbar';
import { ReplyDrawer } from '../../components/ReplyDrawer';
import ShowReplies from '../../components/ShowReplies';



const page = () => {
    const pathname = usePathname();
    const splitted = pathname.split("/");
    const id = splitted[splitted.length - 1]

    const [questions, setQuestions] = useState([])
    var temp = [];

    useEffect(() => {
        ; (async () => {
            const colRef = collection(db, 'Discussion');
            const snapshots = await getDocs(colRef);
            var docs = []
            for (let i = 0; i < snapshots.docs.length; i++) {
                docs.push([snapshots.docs[i].id, snapshots.docs[i].data()])
            }

            temp.push(docs);
            var temp2 = []
            for (let i = 0; i < temp.length; i++) {
                if (i % 2 == 0) temp2.push(temp[i]);
            }
            setQuestions(temp2[0]);

        })()
    }, [])

    let data = null;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i][0] == id) {
            data = questions[i][1]
        }
    }

    return (
        <div className='h-screen fixed overflow-y-auto w-full bg-blue-50'>
            <Navbar />
            <div className='mx-4'>
                <h3 className='text-black text-center mt-3 mb-5'>{data?.Topic}</h3>
                <Card className='m-2 flex flex-col justify-between hover:bg-gray-100 '>
                    <CardHeader className='pt-4 pb-2'>
                        <CardTitle className='text-lg'>{data?.Topic}</CardTitle>
                    </CardHeader>
                    <CardContent className='pb-2'>
                        <p className='text-xs text-gray-600'>{data?.Desc}</p>
                    </CardContent>
                    <CardFooter className="align-bottom justify-end text-xs pb-3">
                        {data?.Creator} | Created at(YYYY:MM:DD) : {data?.Timestamp}
                    </CardFooter>
                </Card>
            </div>
            <ShowReplies id={id} />
            <ReplyDrawer id={id} />

        </div>
    )
}

export default page