import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/user-profile-form/UseProfileForm"


const UserProfilePage = () => {
    const {currentUser, isLoading: isGetLoading} = useGetMyUser();
    const {updateUser, isPending} = useUpdateMyUser(); 

    if(isGetLoading){
      return <span>Loading...</span>
    }

  return (
    <UserProfileForm onSave={updateUser} isLoading={isPending}/>
  )
}

export default UserProfilePage