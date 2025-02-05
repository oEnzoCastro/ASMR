export default async function page() {

  const getMembers = async () => {
    const res = await fetch('https://asmr-nu.vercel.app/api/database')
    return res.json()
  }

  const data = await getMembers();

  console.log(data.members[0].name)

  return (
    <div>{data.members[0].name}</div>
  )
}