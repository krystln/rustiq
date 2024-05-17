import fireApp from "../config";
import { getFirestore } from "firebase/firestore";

const fireDB = getFirestore(fireApp);
export default fireDB;
