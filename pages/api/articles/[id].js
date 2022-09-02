import { articles } from "../../../data"

export default function handler(req, res) {
  const article = articles.filter((article) => article.id === req.query.id)

  if (article.length > 0) {
    res.status(200).json(article[0])
  } else {
    res
      .status(404)
      .json({ message: `Article with id ${req.query.id} is not found` })
  }
}
