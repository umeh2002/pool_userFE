import { useRecoilValue } from "recoil";
import { user } from "../global/recoil";
import { useGetOnePool } from "../hooks/PoolUser";

const Profile = () => {
  const state = useRecoilValue(user);

  console.log("reading :", state._id);

  const { data } = useGetOnePool(state._id);
  return (
    <div className="w-full h-[calc(100vh-70px)] bg-gray-100 flex justify-center items-center">
      <div className="w-[90%] h-full pt-[30px]">
      {data && !Array.isArray(data) && (
          <div
            className="w-[350px] h-[300px] shadow-sm rounded-md bg-white text-black p-3"
            key={data._id}
          >
            <div>
              <img
                src={data.avatar}
                alt=""
                className="w-full h-[150px] border rounded-md mb-2"
              />
              <div className="text-center">{data.name}</div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-[14px]">{data.email}</div>
                <div className="text-[14px]">{data.location}</div>
              </div>
            </div>

            <div className="mt-[20px]">
              <div className="flex items-center hover:cursor-pointer duration-300 transition-all">
                <div className="mr-1 text-[13px]">{data.friends.length}</div>
                <div className="text-[13px]">friends</div>
              </div>
              <div className="flex items-center hover:cursor-pointer duration-300 transition-all">
                <div className="mr-1 text-[13px]">{data.likes.length}</div>
                <div className="text-[13px]">likes</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
