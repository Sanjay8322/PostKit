import React, { useReducer, useState } from 'react'
import { LayoutDashboard, User2Icon, SquarePenIcon, StickyNoteIcon, LogOutIcon, Lightbulb } from 'lucide-react'
import logo from '../assets/postkitLogo.png'
import { space } from 'postcss/lib/list';
import CreatePost from '../Components/CreatePost';
import Feed from '../Components/Feed';
import Account from '../Components/Account';
import ProfileBoard from '../Components/ProfileBoard';
import IdeaGenerate from '../Components/IdeaGenerate';
const array = [
  {
    name: 'dashboard',
    icon: <LayoutDashboard />,
  },
  {
    name: 'account',
    icon: <User2Icon />,
  },
  {
    name: 'create',
    icon: <SquarePenIcon />,
  },
  {
    name: 'feed',
    icon: <StickyNoteIcon />,
  },
  {
    name:'ideas',
    icon:<Lightbulb/>
  }
];

const Dashboard = () => {
  const intialState='dashboard'
  const [state,dispatch]=useReducer(reducer,intialState)
  
  return (
    <div className='flex flex-wrap justify-center items-center h-screen' >
      
        <div className='flex flex-col items-center lg:w-1/4 h-3/4'>

            {array.map((item,index)=>(
              <div key={index} className='w-48'>
                    <div
                        className='flex items-center justify-center space-x-3 p-4  rounded-xl mt-5'
                        onClick={() => dispatch({ type: item.name })}
                        style={{
                          backgroundColor: state === item.name ? 'white' : '',
                          color: state === item.name ? '#4a55ff' : ''
                        }}
                      >
                    {item.icon}
                </div>
              </div>
            ))}
           

            <div className='w-48 mt-10 pb-5 rounded-xl'>
                <img src="" alt="" />
                <div className='flex items-center justify-center space-x-3 p-4 rounded-xl mt-5'>
                    <LogOutIcon/>
                </div>
            </div>
        </div>


        {state=='create' && (
         <CreatePost/>
        )
        }

        {state=='dashboard' && (
         <ProfileBoard/>
        )}

        {state=='account' && (
          <Account />
        )}

        {state=='feed' && (
          <Feed/>
        )}


        {state=='ideas' && (
          <IdeaGenerate/>
        )}

    </div>
  )
}

export default Dashboard


const reducer= (state,action) =>{
  switch(action.type){
    case 'dashboard':
    return 'dashboard';
    case 'account':
      return 'account';
    case 'create':
      return 'create';
    case 'feed':
      return 'feed';
    case 'ideas':
      return 'ideas';
    default:
      return state;
  }
}
