import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

const ShowReplies = (props) => {
    const [replies, setReplies] = useState([])
    var temp = [];

    useEffect(() => {
        ; (async () => {
            const colRef = collection(db, props.id);
            const snapshots = await getDocs(colRef);
            const docs = snapshots.docs.map(doc => doc.data())
            temp.push(docs);
            var temp2 = []
            for (let i = 0; i < temp.length; i++) {
                if (i % 2 == 0) temp2.push(temp[i]);
            }
            setReplies(temp2[0]);
        })()
    }, [])

    return (
        <>
            <h3 className='text-black text-left ml-36 mt-3 mb-5'>Comments</h3>
            {
                replies.map((reply) => {
                    console.log(reply)
                    return (
                        <div className='w-4/5 mx-auto'>
                            <Card className='m-2 flex flex-col justify-between hover:bg-gray-100 '>
                                <CardHeader className='pt-4 pb-2'>
                                    <CardTitle className='text-lg'>{reply.Topic}</CardTitle>
                                </CardHeader>
                                <CardContent className='pb-2'>
                                    <p className='text-xs text-gray-600'>{reply.Desc}</p>
                                </CardContent>
                                <CardFooter className="align-bottom justify-end text-xs pb-3">
                                    {reply.Creator} | Created at(YYYY:MM:DD) : {reply.Timestamp}
                                </CardFooter>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowReplies