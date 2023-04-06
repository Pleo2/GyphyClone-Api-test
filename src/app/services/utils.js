export const removeDuplicatesStories = (arr) => {
  const setObj = new Set()

  return arr.reduce((acc, item) => {
    if (!setObj.has(item.story_id)) {
      setObj.add(item.story_id, item)
      acc.push(item)
    }
    return acc
  }, [])
}
