const names = ['Tiberius', 'Lisa']

export function Post() {
  const choosenName = Math.random() > 0.5 ? names[0] : names[1]

  return (
    <div>
      <p>{choosenName}</p>
      <p>Hello!</p>
    </div>
  )
}
