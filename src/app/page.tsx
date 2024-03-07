
export default function Home() {
  return (
    <main >
      <form action="#" method="get">
        <div>
          <p>Name</p>
          <input tabIndex={1} type="text" name="userName" />
        </div>
        <div>
          <p>Password</p>
          <input tabIndex={2} type="password" name="password" />
        </div>
        <div>
          <p>Telephone</p>
          <input tabIndex={3} type="tel" name="userPhone" />
        </div>
        <div>
          <p>Gender</p>
          <div>
            <input tabIndex={4} defaultChecked type="radio" name="gender" value='male' /> Male
          </div>
          <div>
            <input tabIndex={4} type="radio" name="gender" value='female' /> Female
          </div>
        </div>
        <div>
          <p>The property</p>
          <div>
            <input tabIndex={5} type="checkbox" name="bike" value='yes' />Bike
          </div>
          <div>
            <input tabIndex={6} type="checkbox" name="car" value='yes' />Car
          </div>
          <div>
            <input tabIndex={7} defaultChecked type="checkbox" name="house" value='yes' />House
          </div>
        </div>
        <div>
          <p>Info</p>
          <textarea tabIndex={8} name="info" ></textarea>
        </div>
        <div>
          <p>Photo</p>
          <input tabIndex={9} type='file' />
        </div>
        <div>
          <p>Favorite colors</p>
          <select name="colors" defaultValue='blue' >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="Gray">Gray</option>
          </select>
        </div>
        <div>
          <p>Actions</p>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </main>
  );
}
