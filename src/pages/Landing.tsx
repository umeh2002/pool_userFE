import {AiOutlineLike} from "react-icons/ai"
import { useGetPool } from "../hooks/PoolUser";
import { LikeOneUser, sendFriendRequst } from "../api/Api";
import { useRecoilValue } from "recoil";
import { user } from "../global/recoil";
import Swal from "sweetalert2";

const Landing = () => {
  const {allPool}= useGetPool()
  const state = useRecoilValue(user);

  function friendMail(id:any){
    sendFriendRequst(id, state._id)
  }
  return (
    <div className="w-full min-h-[100vh] bg-gray-100 flex justify-center ">
      <div className="w-[90%] h-full flex flex-wrap justify-center">
      {
        allPool?.map((el:any)=>(
          <div className="border w-[300px] min-h-[250px] bg-white shadow-sm rounded-md p-3 m-3" key={el._id}>
          <img
            src={el.avatar}
            alt=""
            className="w-full h-[150px] border object-cover hover:cursor-pointer transition-all duration-300 rounded"
          />
          <div className="flex items-center justify-between mt-[10px]">
            <div>
              <div className="text-[15px] font-semibold">{el.name}</div>
              <div className="text-[13px] font-normal">{el.email}</div>
              <div className="text-[12px] font-light">{el.location}</div>
            </div>
            <div className="flex items-center">
              <div className="text-[15px] mr-1 mt-2">{el.likes.length}</div>
              <div className="text-[20px] hover:cursor-pointer duration-300 transition-all">
                <AiOutlineLike onClick={()=>{
                  LikeOneUser(el._id)
                }}/>
              </div>
            </div>
          </div>
          <div className="w-full h-[40px] rounded-md hover:cursor-pointer transition-all duration-300 mt-[20px] bg-black text-white flex justify-center items-center" 
          onClick={()=>{
            friendMail(el._id)
            Swal.fire({
              icon: "success",
              title: "successfully sent friend request",
              text: "a mail have been sent to your friend",
              timerProgressBar: true,
              timer: 3000,
            });
          }}
          >add friend</div>
        </div>
        ))
      }
      </div>
    </div>
  );
};

export default Landing;
