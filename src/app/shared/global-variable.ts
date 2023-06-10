import { Injectable } from "@angular/core";
import { IUser } from "./model/user";

@Injectable()
export class GlobalVariables {

    currentUserData: IUser = <IUser>{};

    isConnected: Boolean = false;
}
