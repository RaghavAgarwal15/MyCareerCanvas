'use client'
import { Button as ButtonS } from "./ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "./ui/drawer"
import {
  Card,
  Input,
  Typography,
} from "@material-tailwind/react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import toast from "react-hot-toast";
import * as React from "react"
import { PlusIcon } from "@radix-ui/react-icons"
import FilterContext from '../context/filterContext'
import { Cross1Icon } from "@radix-ui/react-icons";


export function ReplyDrawer(props) {

  const [goal, setGoal] = React.useState(350)
  const context = React.useContext(FilterContext);
  const { user, googleSignIn } = context;
  const [data, setData] = React.useState({ Topic: "", Desc: "", Answers: [], Creator: "", Email: "", Timestamp: Date.now(), Timesort: Date.now() });

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {

    }
  }

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const handleUserData = (e) => {
    setData({ ...data, Creator: user.displayName, Email: user.email, Timestamp: new Date().toISOString().split("T")[0], Timesort: Date.now() })
  }

  const handleOnClick = async (e) => {
    await setDoc(doc(db, props.id, Date.now().toString()), data);
    window.location.reload()
    toast.success('Added Successfully')

  }

  return (
    <div>
      <Drawer>
        {user ? (<DrawerTrigger asChild><ButtonS variant="default" className='fixed bottom-0 right-0 mb-3 mr-4' onClick={handleUserData}><PlusIcon /><p className="ml-2">New</p></ButtonS></DrawerTrigger>) : (<ButtonS variant="default" className='fixed bottom-0 right-0 mb-3 mr-4'><PlusIcon /><p className="ml-2" onClick={handleSignIn}>New</p></ButtonS>)}

        <DrawerContent>
          <div className="mx-auto w-3/5">
            <Card color="transparent" shadow={false} className="w-full ">
              <form className="mt-8 mb-2 ">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3" >
                    Enter Topic
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Topic of your discussion..."
                    className="shadow-md !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    onChange={(e) => setData({ ...data, Topic: e.target.value })}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Description
                  </Typography>
                  <div class="relative w-full min-w-[200px]">
                    <textarea
                      class="peer h-full min-h-[100px] w-full resize-none rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 shadow-md"
                      placeholder=" " onChange={(e) => setData({ ...data, Desc: e.target.value })}></textarea>
                    <label
                      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Explain your topic
                    </label>
                  </div>
                </div>
              </form>
            </Card>
            <DrawerFooter>
              <DrawerClose asChild>
                <ButtonS className='w-1/4 mx-auto' onClick={handleOnClick}>Submit</ButtonS>
              </DrawerClose>
              <DrawerClose asChild>
                <ButtonS className='fixed top-3 right-3'><Cross1Icon /></ButtonS>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

    </div>
  );
}