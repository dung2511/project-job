import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase.config";

export const useFetchPersonalSize = () => {
  const [queryPersonalSize, setQueryPersonalSize] = useState(null);
  useEffect(() => {
    const q = query(
      collection(firestore, "personel_size"),
      orderBy("id"),
      startAt(0)
    );
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setQueryPersonalSize(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { queryPersonalSize };
};
export const useFetchCity = () => {
  const [listCity, setListCity] = useState(null);
  useEffect(() => {
    const q = query(collection(firestore, "cities"));
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setListCity(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { listCity };
};
export const useFetchCareerJob = () => {
  const [career, setCareer] = useState(null);
  useEffect(() => {
    const q = query(collection(firestore, "career_categories"));
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setCareer(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { career };
};
export const useFetchLevelJob = () => {
  const [level, setLevel] = useState(null);
  useEffect(() => {
    const q = query(collection(firestore, "levels"));
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setLevel(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { level };
};
export const useFetchExperience = () => {
  const [experience, setExperience] = useState(null);
  useEffect(() => {
    const q = query(
      collection(firestore, "experiences"),
      orderBy("id"),
      startAt(0)
    );
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setExperience(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { experience };
};
export const useFetchWorkType = () => {
  const [workType, setWorkType] = useState(null);
  useEffect(() => {
    const q = query(
      collection(firestore, "working_types"),
      orderBy("id"),
      startAt(0)
    );
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setWorkType(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { workType };
};
export const useFetchUnitType = () => {
  const [listUnit, setListUnit] = useState(null);
  useEffect(() => {
    const q = query(
      collection(firestore, "unit_type"),
      orderBy("id"),
      startAt(0)
    );
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setListUnit(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { listUnit };
};
export const useFetchSalary = () => {
  const [salary, setSalary] = useState(null);
  useEffect(() => {
    const q = query(
      collection(firestore, "price_ranges"),
      orderBy("id"),
      startAt(0)
    );
    if (!q.empty) {
      const categories = onSnapshot(q, (querySnapshot) => {
        setSalary(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, []);
  return { salary };
};
export const queryCityById = async (cityId) => {
  try {
    const cityDoc = await getDoc(doc(firestore, "cities", cityId));
    if (cityDoc.exists()) {
      return cityDoc.data().name;
    } else {
      return "Unknown city";
    }
  } catch (error) {
    console.error("Error fetching city:", error);
    return "Error fetching city";
  }
};
export const timeAgo = (seconds) => {
  const timeNow = Date.now();
  const timeCreated = seconds * 1000;

  const timeDifference = timeNow - timeCreated;

  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (secondsAgo < 60) {
    return `Cập nhật ${secondsAgo} giây trước`;
  } else if (minutesAgo < 60) {
    return `Cập nhật ${minutesAgo} phút trước`;
  } else if (hoursAgo < 24) {
    return `Cập nhật ${hoursAgo} giờ trước`;
  } else if (daysAgo < 30) {
    return `Cập nhật ${daysAgo} ngày trước`;
  } else {
    return `Hơn 1 tháng trước`;
  }
};
