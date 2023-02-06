import React, { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, auth} from "../config/firebase";

interface TestItem {
  title: string;
  year: number;
  good: boolean;
  userId: string;
  userEmail: string;
  id: string;
}


// Buggy because needs to have seperate components
// really for each item in the list.

const FirestoreTest: React.FC = (): JSX.Element => {

  const [testList, setTestList] = useState<TestItem[]>([]);

  const [newTitle, setNewTitle] = useState("");
  const [newYear, setNewYear] = useState(0);
  const [isNewGood, setNewGood] = useState(true);

  const [updatedTitle, setUpdatedTitle] = useState("")

  const testCollectionRef = collection(db, "tester");

  const getTestList = async (): Promise<void> => {
    try {
      const data = await getDocs(testCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        title: doc.data().title, 
        year: doc.data().year,
        good: doc.data().good,
        userId: doc.data().userId,
        userEmail: doc.data().userEmail,
        id: doc.id,
      }));
      console.log(data);
      console.log(filteredData);
      setTestList(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTestList();
  }, []);

  const onSubmitItem = async (): Promise<void> => {
    try {
      await addDoc(testCollectionRef, {
        title: newTitle,
        year: newYear,
        good: isNewGood,
        userId: auth?.currentUser?.uid,
        userEmail: auth?.currentUser?.email
      });

      getTestList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = async (id: string): Promise<void> => {
    const testDoc = doc(db, "tester", id);
    await deleteDoc(testDoc);
    getTestList();
  };

  const updateItemTitle = async (id: string): Promise<void> => {
    const testDoc = doc(db, "tester", id);
    await updateDoc(testDoc, {title: updatedTitle});
    getTestList();
  };


  return (
    <>
      <div>
        <input
          placeholder="Title"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          placeholder="Year"
          type="number"
          onChange={(e) => setNewYear(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isNewGood}
          onChange={(e) => setNewGood(e.target.checked)}
        />
        <label> Good? </label>
        <button onClick={onSubmitItem}> Submit</button>
      </div>
      {testList.map((item) => (
        <div key={item.id}>
          <h1 style={{ color: item.good ? "green" : "red" }}>{item.title}</h1>
          <p>{item.year}</p>
          <p> Item Id {item.id}</p>
          <p> User Id {item.userId}</p>
          <p> User Email {item.userEmail}</p>
          <button onClick={() => deleteItem(item.id)}>Delete Item</button>
          <input placeholder="change title" onChange={(e) => setUpdatedTitle(e.target.value)}/>
          <button onClick={() => updateItemTitle(item.id)}>Update Title</button>
        </div>
      ))}
    </>
  );
};

export default FirestoreTest;
