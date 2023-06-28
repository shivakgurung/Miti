const AboutPage = () => {
  return (
    <div className="mx-3 my-3 lg:mx-auto lg:max-w-3xl">
      <h1 className="mb-4 text-3xl font-bold">Welcome to Miti - Your Nepali Calendar App</h1>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">About Miti:</h2>
        <p className="text-gray-600">
          Miti was created out of a personal need to bridge the gap between two calendars that Nepali
          individuals live by. I was looking for a minimalist Nepali calendar app that would allow me to sync
          events with google calendar. Imagine a scenario, you have an appointment for a meeting with Ram on
          Asadh 15 and you want to create a reminder, it requires you to first convert the date to the
          Gregorian calendar and then create the event. We understand the challenges faced when scheduling
          events or appointments in one calendar system and trying to decipher the corresponding date in the
          other. Miti is here to simplify your life by seamlessly syncing events between the Nepali and
          Gregorian calendars.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Sync and Simplify:</h2>
        <p className="text-gray-600">
          Miti isn't an attempt to simply replace all the calendars you use, but rather a tool to help you
          create and browse your events in the Nepali calendar system. Miti goes beyond the traditional
          calendar app functionalities by offering a seamless integration with Google Calendar. By syncing
          your events with Google Calendar, you can easily access and manage your schedule across different
          operating systems and calendar apps that support Google Calendar integration. No matter where you
          are or which device you're using, Miti ensures that your events are always synchronized and up to
          date. That way, you can inter-operate between the Nepali and Gregorian calendars without having to
          convert dates manually.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Nepali to Gregorian, and Vice Versa:</h2>
        <p className="text-gray-600">
          With Miti, creating events using the Nepali date and viewing them in the Gregorian date format and
          vice versa becomes effortless. You can simply input the Nepali date for your event in the Miti app,
          and it will automatically be converted to the corresponding Gregorian date in Google Calendar. We
          also provide a converter tool that allows you to convert dates between the Nepali and Gregorian
          calendar.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">View and Manage Your Schedule:</h2>
        <p className="text-gray-600">
          Miti not only allows you to create events in the Nepali calendar, but it also provides a
          comprehensive view of your Google Calendar events within the app. You can easily browse through your
          schedule, view event details, and manage your appointments, ensuring that you stay organized and
          never miss an important event.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Simplicity and Efficiency:</h2>
        <p className="text-gray-600">
          Unlike existing calendar apps that are often bloated and lack essential features, Miti focuses on
          being a minimalistic and efficient tool. We understand that simplicity is key when it comes to
          managing your schedule, which is why Miti offers a clutter-free interface and prioritizes the
          essential functionalities you need in a calendar app – sync, reminders, and an intuitive user
          experience. We have intentionally limited the features to ensure that the app remains lightweight
          and minimal.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Work Offline, Install as Native App:</h2>
        <p className="text-gray-600">
          Miti leverages Progressive Web App (PWA) technology, enabling you to access the app even when you're
          offline. Whether you're on the go or in an area with limited connectivity, Miti ensures that you can
          still view and manage your events effortlessly. Additionally, you have the option to install Miti as
          a app on your device, allowing you to access the app directly from your home screen. This means that
          you can use Miti just like any other native app, without having to download it from the app store.
          And the best part is, it takes up less storage than a photo.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Open Source and Volunteer-Driven:</h2>
        <p className="text-gray-600">
          Miti is a project built by a dedicated team of volunteers who recognized the need for a reliable
          Nepali calendar app. We are committed to making Miti the best calendar app for Nepali users, and to
          achieve this, we have made the project open source. This means that anyone can contribute to the
          development and improvement of Miti, ensuring that it evolves to meet the needs of the community.
          The app will remain free to use, and we will continue to add new features and functionalities to
          make it even better. We are also open to feedback and suggestions from the community, so feel free
          to reach out to us with your ideas.
        </p>
      </div>
      <div>
        <p className="text-gray-600">
          Join us on this journey of simplifying your calendar management and embracing the Nepali and
          Gregorian calendars seamlessly. Add Miti to your homescreen today and experience the convenience of
          a calendar app tailored for you, by the community, and for the community.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;