import React, { ChangeEvent, FormEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AdCampaignPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullyFurbished: 3,
    halfFurbished: 3,
    littleFurbished: 8,
    increaseCurrentSales: true,
    getNewCustomers: false,
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-01-01'),
    adChannel: {
      poster: true,
      video: false
    },
    designFor: 'some',
    vehicles: [
      { name: 'Fully furbished 1', selected: true },
      { name: 'Fully furbished 2', selected: false },
      { name: 'Fully furbished 3', selected: false },
      { name: 'Half furbished 1', selected: false },
      { name: 'Half furbished 2', selected: false },
      { name: 'Half furbished 3', selected: false }
    ],
    extraNote: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      const target = e.target as HTMLInputElement;
  
      if (name.includes("adChannel")) {
        const channelName = name.split('.')[1];
        setFormData(prevState => ({
          ...prevState,
          adChannel: {
            ...prevState.adChannel,
            [channelName]: target.checked,
          },
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          [name]: target.checked
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  
  const handleDateChange = (date: Date | null, field: 'startDate' | 'endDate') => {
    setFormData(prevState => ({
      ...prevState,
      [field]: date
    }));
  };

  const handleVehicleChange = (index: number) => {
    setFormData(prevState => ({
      ...prevState,
      vehicles: prevState.vehicles.map((vehicle, i) => 
        i === index ? { ...vehicle, selected: !vehicle.selected } : vehicle
      )
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="ad-campaign-page">
      <header>
        <div className="menu-icon">☰</div>
        <h1>Client <span className="client-id">03CLA-p492</span></h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="section vehicles-on-road">
          <h2>Vehicles on the road</h2>
          <div>
            <label>Fully furbished</label>
            <input type="number" name="fullyFurbished" value={formData.fullyFurbished} onChange={handleInputChange} />
          </div>
          <div>
            <label>Half furbished</label>
            <input type="number" name="halfFurbished" value={formData.halfFurbished} onChange={handleInputChange} />
          </div>
          <div>
            <label>Little furbished</label>
            <input type="number" name="littleFurbished" value={formData.littleFurbished} onChange={handleInputChange} />
          </div>
        </div>

        <div className="section customers">
          <h2>Customers</h2>
          <label>
            <input type="checkbox" name="increaseCurrentSales" checked={formData.increaseCurrentSales} onChange={handleInputChange} />
            Increase current customer sales
          </label>
          <label>
            <input type="checkbox" name="getNewCustomers" checked={formData.getNewCustomers} onChange={handleInputChange} />
            Get new customers
          </label>
        </div>

        <div className="section ad-campaign-period">
          <h2>Period of ad campaign</h2>
          <DatePicker
            selected={formData.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
            dateFormat="yyyy-MM-dd"
          />
          <DatePicker
            selected={formData.endDate}
            onChange={(date) => handleDateChange(date, 'endDate')}
            dateFormat="yyyy-MM-dd"
          />
        </div>

        <div className="section ad-channel">
          <h2>Ad channel</h2>
          <label>
            <input type="checkbox" name="adChannel.poster" checked={formData.adChannel.poster} onChange={handleInputChange} />
            Poster(Stickers)
          </label>
          <label>
            <input type="checkbox" name="adChannel.video" checked={formData.adChannel.video} onChange={handleInputChange} />
            Video
          </label>
        </div>

        <div className="section design-requirements">
          <h2>Design requirements</h2>
          <input type="file" />
          <div>
            <label>
              <input type="radio" name="designFor" value="all" checked={formData.designFor === 'all'} onChange={handleInputChange} />
              Design is for ALL vehicles
            </label>
            <label>
              <input type="radio" name="designFor" value="some" checked={formData.designFor === 'some'} onChange={handleInputChange} />
              Design is for SOME vehicles
            </label>
          </div>
          <div className="vehicle-list">
            {formData.vehicles.map((vehicle, index) => (
              <label key={index}>
                <input type="checkbox" checked={vehicle.selected} onChange={() => handleVehicleChange(index)} />
                {vehicle.name}
              </label>
            ))}
          </div>
        </div>

        <div className="section extra-note">
          <h2>Extra note</h2>
          <textarea name="extraNote" value={formData.extraNote} onChange={handleInputChange} placeholder="Example Text" />
        </div>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button">Submit & Go to journey</button>
          <button type="button">Save</button>
          <button type="button">Edit</button>
        </div>
      </form>
    </div>
  );
};

export default AdCampaignPage;