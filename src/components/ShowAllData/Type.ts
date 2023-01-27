export type apiType = {
  flight_number: number;
  mission_name: string;
  mission_id: any;
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: [
        {
          core_serial: string;
          flight: number;
          block: any;
          gridfins: boolean;
          legs: boolean;
          reused: boolean;
          land_success: any;
          landing_intent: boolean;
          landing_type: any;
          landing_vehicle: any;
        }
      ];
    };
    second_stage: {
      block: number;
      payloads: [
        {
          payload_id: string;
          norad_id: any;
          reused: boolean;
          customers: string[];
          nationality: string;
          manufacturer: string;
          payload_type: string;
          payload_mass_kg: number;
          payload_mass_lbs: number;
          orbit: string;
          orbit_params: {
            reference_system: "geocentric";
            regime: "low-earth";
            longitude: null;
            semi_major_axis_km: null;
            eccentricity: null;
            periapsis_km: 400;
            apoapsis_km: 500;
            inclination_deg: 39;
            period_min: null;
            lifespan_years: null;
            epoch: null;
            mean_motion: null;
            raan: null;
            arg_of_pericenter: null;
            mean_anomaly: null;
          };
        }
      ];
    };
    fairings: {
      reused: false;
      recovery_attempt: false;
      recovered: false;
      ship: null;
    };
  };
  ships: [];
  telemetry: {
    flight_club: null;
  };
  launch_site: {
    site_id: "kwajalein_atoll";
    site_name: "Kwajalein Atoll";
    site_name_long: "Kwajalein Atoll Omelek Island";
  };
  launch_success: false;
  launch_failure_details: {
    time: 33;
    altitude: null;
    reason: "merlin engine failure";
  };
  links: {
    mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png";
    mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png";
    reddit_campaign: null;
    reddit_launch: null;
    reddit_recovery: null;
    reddit_media: null;
    presskit: null;
    article_link: "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html";
    wikipedia: "https://en.wikipedia.org/wiki/DemoSat";
    video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88";
    youtube_id: "0a_00nJ_Y88";
    flickr_images: [];
  };
  details: "Engine failure at 33 seconds and loss of vehicle";
  static_fire_date_utc: "2006-03-17T00:00:00.000Z";
  static_fire_date_unix: 1142553600;
  timeline: {
    webcast_liftoff: 54;
  };
  crew: null;
};
