export function getNeighbours(page, array) {
  const index = array.findIndex(n => n.url == page.path)
	const prevPost = index > 0 ? array[index -1] : null;
	const nextPost = index < array.length ? array[index +1] : null;

  return [prevPost, nextPost]
}
