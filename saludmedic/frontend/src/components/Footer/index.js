export default function Footer() {
  return (
    <div class="text-sm text-gray-500 font-semibold py-1 flex flex-col items-center">
      <div>
        <span>Salud Medic</span>
        <p>Villa el Salvador - 163 Calle Bolivar</p>
      </div>
      <div>
        <div className="flex flex-row mt-2 space-x-2">
          <i className="w-7 h-7 rounded-full hover:bg-gray-300 flex justify-center items-center cursor-pointer">
            <img
              className="w-7 h-7 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
            />
          </i>
          <i className="w-8 h-8 rounded-full hover:bg-gray-300 flex justify-center items-center cursor-pointer">
            <img
              className="w-8 h-8 rounded-full"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              alt="Facebook"
            />
          </i>
          <i className="w-8 h-8 rounded-full hover:bg-gray-300 flex justify-center items-center cursor-pointer">
            <img
              className="w-8 h-8 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
              alt="Facebook"
            />
          </i>
        </div>
      </div>
    </div>
  );
}
