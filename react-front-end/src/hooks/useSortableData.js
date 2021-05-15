import React, { useState, useMemo } from "react";

export const SORT_CONFIG = {
  EXERCISE_NAME: "exercise_name",
  MUSCLE_GROUP_ID: "muscle_group_id",
  TOTAL_TIME: "total_time",
  ASCENDING: "ascending",
  DESCENDING: "descending",
};

export const useSortableData = (exerciseList) => {
  const [sortConfig, setSortConfig] = useState({
    key: SORT_CONFIG.MUSCLE_GROUP_ID,
    direction: SORT_CONFIG.ASCENDING,
  });

  const sortedExercises = useMemo(() => {
    return exerciseList.sort((a, b) => {
      if (sortConfig.direction === SORT_CONFIG.ASCENDING) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return -1;
        } else if (a[sortConfig.key] > b[sortConfig.key]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return -1;
        } else if (a[sortConfig.key] < b[sortConfig.key]) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }, [exerciseList, sortConfig]);

  const requestSort = (key) => {
    setSortConfig((sortConfig) => {
      const direction =
        sortConfig.direction === SORT_CONFIG.ASCENDING
          ? SORT_CONFIG.DESCENDING
          : SORT_CONFIG.ASCENDING;

      return { key, direction };
    });
  };

  return { exerciseList: sortedExercises, requestSort, sortConfig };
};
