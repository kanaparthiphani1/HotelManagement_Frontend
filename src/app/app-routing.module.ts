import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { ShowBookingsComponent } from './show-bookings/show-bookings.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { UserEmailVerifyComponent } from './user-email-verify/user-email-verify.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { RoomManagementComponent } from './room-management/room-management.component';
import { ManageBookComponent } from './manage-book/manage-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'showRooms', component: RoomListComponent },
  { path: 'addRoom', component: AddRoomComponent },
  { path: 'updateRoom/:id', component: UpdateRoomComponent },
  { path: 'detailsRoom/:id', component: RoomDetailsComponent },
  { path: 'addBooking', component: AddBookingComponent},
  {path : 'showBookings', component: ShowBookingsComponent},
  {path: 'userBookings', component: BookingDetailsComponent},
  {path:'admin-dashboard', component:AdminDashBoardComponent, children:[
    {path:"" ,component:DasboardComponent},
    {path:"dasboard" ,component:DasboardComponent},
    {path:"ems" ,component:EmployeeManagementComponent},
    {path:"rms" ,component:RoomManagementComponent},
    {path:"manage-book" ,component:ManageBookComponent}
  ]},
  {path: 'user-dashboard', component: UserDashBoardComponent},
  {path: 'emailverify', component: UserEmailVerifyComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
