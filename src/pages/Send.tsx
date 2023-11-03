import { useNavigate, useParams } from "react-router-dom";
import { confirmRequst, declineRequst } from "../api/Api";
import { useRecoilValue } from "recoil";
import { user } from "../global/recoil";

const Send = () => {
  const {friendID }: any = useParams();

  const navigate = useNavigate()
  const state = useRecoilValue(user);

  console.log(state._id)
  return (
    <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center bg-gray-100">
      <div className="w-[300px] p-3 h-[150px] shadow-md bg-white rounded-md">
        <button
          className="w-full h-[40px] rounded-md bg-black text-white hover:cursor-pointer duration-300 transition-all mb-[20px] mt-[10px]"
          onClick={() => {
            confirmRequst(state._id, friendID).then((res: any) => {
              console.log(res)
              navigate("/profile")

            });
          }}
        >
          confirm friend
        </button>
        <button
          className="w-full h-[40px] rounded-md bg-red-600 text-white hover:cursor-pointer duration-300 transition-all mb-[20px]"
          onClick={() => {
            declineRequst(state._id, friendID).then((res: any) => {
              console.log(res)
              navigate("/profile")
            });
          }}
        >
          {" "}
          decline friend
        </button>
      </div>
    </div>
  );
};

export default Send;
