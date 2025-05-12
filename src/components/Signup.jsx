import supabase from '../utils/supabase'

function Signup() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (error) {
            console.error(error)
        }
    }
  return (
    <div className="flex justify-center items-center border-2 card border-gray-500 mt-10">
        <form onSubmit={handleSubmit} className="bg-base-100 card w-96 card-md shadow-sm">
            <div className="card-body">
                <label htmlFor="email" className="input">
                    <span className="label">Email</span>
                    <input type="email" id="email" name="email" className="input mr-3 ml-3 w-50" />
                </label>
                <label htmlFor="password" className="input">
                    <span className="label">Password</span>
                    <input type="password" id="password" name="password" className="input mr-3 ml-3 w-50" />
                </label>
            </div>
            <button type="submit">Signup</button>
        </form>
    </div>
    );
}

export default Signup;
