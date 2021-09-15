const rocketTestData = {
  rocket_id: 'falcon1',
  rocket_name: 'Falcon 1',
  rocket_type: 'Merlin A',
  first_stage: {
    cores: [
      {
        core_serial: 'Merlin1A',
        flight: 1,
        block: 1,
        gridfins: false,
        legs: false,
        reused: false,
        land_success: true,
        landing_intent: false,
        landing_type: '',
        landing_vehicle: ''
      }
    ]
  },
  second_stage: {
    block: 1,
    payloads: [
      {
        payload_id: 'FalconSAT-2',
        norad_id: [],
        reused: false,
        customers: ['DARPA'],
        cap_serial: 'C101',
        nationality: 'United States',
        manufacturer: 'SSTL',
        payload_type: 'Satellite',
        payload_mass_kg: 20,
        payload_mass_lbs: 43,
        orbit: 'LEO',
        orbit_params: {
          reference_system: 'geocentric',
          regime: 'low-earth',
          longitude: 1,
          semi_major_axis_km: 1,
          eccentricity: 1,
          periapsis_km: 400,
          apoapsis_km: 500,
          inclination_deg: 39,
          period_min: 1,
          lifespan_years: 1,
          epoch: undefined,
          mean_motion: undefined,
          raan: undefined,
          arg_of_pericenter: undefined,
          mean_anomaly: undefined
        },
        cargo_manifest: '',
        uid: 'UerI6qmZTU2Fx2efDFm3QQ=='
      }
    ]
  },
  fairings: {
    reused: false,
    recovery_attempt: false,
    recovered: false,
    ship: ''
  }
};

export { rocketTestData as default };
