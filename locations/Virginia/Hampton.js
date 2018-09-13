var Hampton = {

    boundary: "http://webgis.hampton.gov/ArcGIS/rest/services/Public/MapServer/57",
    neighborhoods: "",
    AICUZ: "",
    FIRM: "",
    representatives: "https://www.googleapis.com/civicinfo/v2/representatives",
    evacuation: "https://services3.arcgis.com/qVupYidwzMKkDQzr/arcgis/rest/services/Hurricane_Evacuation_Zones_Expanded/FeatureServer/0",

  
    fire: {
      calls: "",
      districts: "",
      hydrants: {
        public: "",
        private: ""
      },
      incidents: ""
    },
  
    medical: {
      emergency: {
        calls: ""
      },
      facilities: "",
      hospitals: ""
    },
  
    police: {
      calls: "",
      incidents: ""
    },
  
    recreation: {
      centers: "",
      greenways: "",
      libraries: "",
      parks: "",
      trails: "",
      water: ""
    },
  
    schools: {
      locations: {
        all: "",
        elementary: "",
        high: "",
        middle: "",
        pre: ""
      },
      zones: {
        elementary: "",
        high: "",
        middle: "",
        pre: ""
      }
    }
  };
  
  module.exports = Hampton;
  