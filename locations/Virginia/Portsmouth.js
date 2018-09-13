var Portsmouth = {

    boundary: "http://www2.portsmouthva.gov/arcgisweb/rest/services/StandardLayers/MapServer/4",
    neighborhoods: "http://www2.portsmouthva.gov/arcgisweb/rest/services/ArcGIS_Online_GDB/MapServer/12",
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
  
  module.exports = Portsmouth;
  