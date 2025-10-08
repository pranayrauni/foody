import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi"
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm"


const ManageRestaurantPage = () => {
  const {createRestaurant, isPending: isCreatePending} = useCreateMyRestaurant();
  const {restaurant} = useGetMyRestaurant();
  const {updateRestaurant, isPending: isUpdatePending} = useUpdateMyRestaurant();

  const isEditing = !!restaurant;
  
  return (
    <ManageRestaurantForm onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreatePending || isUpdatePending} restaurant={restaurant} />
  )
}

export default ManageRestaurantPage