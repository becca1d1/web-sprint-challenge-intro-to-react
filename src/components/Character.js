// Write your Character component here

function Character({characters}) {
    console.log('characters/js',characters);
    return (
        <div className="characterList">
            <ul>
            {characters.map((objects) => {
                return <li key={objects.name}>{objects.name}</li>
            })}
            </ul>
        </div>
    );
}
//research optional chaining
// how do i delay a rendering of a component while youre waiting on an API call?
export default Character;