import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/user-profile-form/UseProfileForm"


const UserProfilePage = () => {
    const {currentUser, isLoading: isGetLoading} = useGetMyUser();
    const {updateUser, isPending} = useUpdateMyUser(); 

    if(isGetLoading){
      return <span>Loading...</span>
    }

    if(!currentUser){
      return <span>Unable to load user profile</span>;
    }

  return (
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isPending}/>
  )
}

export default UserProfilePage