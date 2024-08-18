import api from "@/plugins/axios";

class UserService {
  getUser = (userId: any) => {
    return api.get(`/users/${userId}`);
  };
}
const userService = new UserService();
export default userService;
