const mergeKLists = (lists) => {
  if (!lists || lists.length === 0) return null;

  while (lists.length > 1) {
    let mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      list1 = lists[i];
      list2 = i + 1 < lists.length ? lists[i + 1] : null;

      mergedLists.push(mergeTwoLists(list1, list2));
    }

    lists = mergedLists;
  }

  return lists[0];
};

const mergeTwoLists = (list1, list2) => {
  if (!list1 || !list2) return list1 || list2;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
