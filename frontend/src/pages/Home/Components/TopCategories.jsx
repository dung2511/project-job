import {
  collection,
  onSnapshot,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../../firebase.config";

const TopCategories = () => {
  const [listCategories, setListCategories] = useState(null);
  const fetchDataCategories = async () => {
    try {
      const q = query(
        collection(firestore, "career_categories"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setListCategories(
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
    fetchDataCategories();
  }, []);
  return (
    <section className="py-6">
      <div className="container">
        <h2 className="text-[#00b14f] text-[1.5rem] font-bold mb-5">
          Top ngành nghề nổi bật
        </h2>
        <div className="flex flex-wrap md:-mx-2">
          {listCategories &&
            listCategories.map((item) => {
              return (
                <div
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:px-2 mb-4"
                  key={item.id}
                >
                  <div className="bg-[#f3f5f7] h-full min-h-[11.5rem] items-center p-6 rounded-[0.75rem] border border-solid border-transparent flex flex-col transition-all duration-500 hover:border-[#33c172] hover:shadow-[0_10px_30px_rgba(14,166,59,.2)] hover:bg-white">
                    <div className="w-[6.25rem] h-[6.25rem]">
                      <img
                        loading="lazy"
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                        className="img-fluid"
                      />
                    </div>
                    <h3 className="text-[1rem] line-camp-2 font-semibold text-center text-[#212f3fz] my-2 leading-5">
                      {item.name}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
