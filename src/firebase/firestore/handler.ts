"use server";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import fireDB from "./db";

export const addData = async (
  collectionID: string,
  documentId: string,
  data: any,
) => {
  try {
    const docRef = await setDoc(doc(fireDB, collectionID, documentId), data);
    console.log("Document written with ID: ", docRef);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
