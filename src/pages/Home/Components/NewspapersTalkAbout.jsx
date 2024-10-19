import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase.config";

const NewspapersTalkAbout = () => {
  const [listNewspapers, setListNewspapers] = useState(null);
  const fetchListNewspapers = async () => {
    try {
      const q = query(
        collection(firestore, "Newspapers"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setListNewspapers(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        return () => categories();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchListNewspapers();
  }, []);
  return (
    <section className="py-14 bg-white">
      <div className="container">
        <h2 className="text-[#00b14f] text-[1.5rem] font-bold mb-6 text-center">
          Báo chí nói về chúng tôi
        </h2>
        <div className="flex flex-wrap -mx-2">
          {listNewspapers &&
            listNewspapers?.map((item) => {
              return (
                <div className="w-1/2 md:w-1/3 xl:w-1/6 px-2 mb-4 xl:mb-0" key={item.id}>
                  <Link
                    target="_blank"
                    to={item.link}
                    className="border border-solid border-[#e9eaec] flex items-center justify-center p-4 overflow-hidden rounded-[0.625rem] hover:border-[#33c172] hover:shadow-[0_10px_20px_rgba(0,177,79,.12)]"
                  >
                    <img title={item.name} alt={item.name} src={item.image} />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default NewspapersTalkAbout;
