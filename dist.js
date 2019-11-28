(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "name": "mt-test-web",
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "@apollo/react-common": {
      "version": "3.1.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@apollo/react-common/-/react-common-3.1.3.tgz",
      "integrity": "sha1-3cNPZAP1XUfA2hR/1HVt/Xxz2sU=",
      "requires": {
        "ts-invariant": "^0.4.4",
        "tslib": "^1.10.0"
      }
    },
    "@apollo/react-components": {
      "version": "3.1.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@apollo/react-components/-/react-components-3.1.3.tgz",
      "integrity": "sha1-j2cmhHzZsOtLIlhrGgONKaqLHaQ=",
      "requires": {
        "@apollo/react-common": "^3.1.3",
        "@apollo/react-hooks": "^3.1.3",
        "prop-types": "^15.7.2",
        "ts-invariant": "^0.4.4",
        "tslib": "^1.10.0"
      }
    },
    "@apollo/react-hoc": {
      "version": "3.1.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@apollo/react-hoc/-/react-hoc-3.1.3.tgz",
      "integrity": "sha1-V0LudPV2EQWPXqH5ZsOPxkKd2ns=",
      "requires": {
        "@apollo/react-common": "^3.1.3",
        "@apollo/react-components": "^3.1.3",
        "hoist-non-react-statics": "^3.3.0",
        "ts-invariant": "^0.4.4",
        "tslib": "^1.10.0"
      }
    },
    "@apollo/react-hooks": {
      "version": "3.1.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@apollo/react-hooks/-/react-hooks-3.1.3.tgz",
      "integrity": "sha1-rULHr3joH+4PMOUyQmQEENW9ApM=",
      "requires": {
        "@apollo/react-common": "^3.1.3",
        "@wry/equality": "^0.1.9",
        "ts-invariant": "^0.4.4",
        "tslib": "^1.10.0"
      }
    },
    "@apollo/react-ssr": {
      "version": "3.1.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@apollo/react-ssr/-/react-ssr-3.1.3.tgz",
      "integrity": "sha1-B5EoDVtzX0L4fb/oSVZOeIQwRbw=",
      "requires": {
        "@apollo/react-common": "^3.1.3",
        "@apollo/react-hooks": "^3.1.3",
        "tslib": "^1.10.0"
      }
    },
    "@apollographql/apollo-tools": {
      "version": "0.4.1",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@apollographql/apollo-tools/-/apollo-tools-0.4.1.tgz",
      "integrity": "sha1-v+WC19pND51EnAWc/Jg6RvMx1Sk=",
      "dev": true,
      "requires": {
        "apollo-env": "^0.6.0"
      }
    },
    "@apollographql/graphql-playground-html": {
      "version": "1.6.24",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@apollographql/graphql-playground-html/-/graphql-playground-html-1.6.24.tgz",
      "integrity": "sha1-POk5yxJ/uKqj/8HpDf+bivny49w=",
      "dev": true
    },
    "@babel/code-frame": {
      "version": "7.5.5",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/code-frame/-/code-frame-7.5.5.tgz",
      "integrity": "sha1-vAeC9tafe31JUxIZaZuYj2aaj50=",
      "requires": {
        "@babel/highlight": "^7.0.0"
      }
    },
    "@babel/core": {
      "version": "7.7.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/core/-/core-7.7.2.tgz",
      "integrity": "sha1-6luZaTvPwFgRb0L6HdVNpBKynZE=",
      "requires": {
        "@babel/code-frame": "^7.5.5",
        "@babel/generator": "^7.7.2",
        "@babel/helpers": "^7.7.0",
        "@babel/parser": "^7.7.2",
        "@babel/template": "^7.7.0",
        "@babel/traverse": "^7.7.2",
        "@babel/types": "^7.7.2",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "json5": "^2.1.0",
        "lodash": "^4.17.13",
        "resolve": "^1.3.2",
        "semver": "^5.4.1",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "@babel/generator": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.7.2.tgz",
          "integrity": "sha1-L0hS0EExpeF+pPZkVIi12mbr868=",
          "requires": {
            "@babel/types": "^7.7.2",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.13",
            "source-map": "^0.5.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM="
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/traverse": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.7.2.tgz",
          "integrity": "sha1-7wpl4HovPFUJZzZrPZtioty+rgk=",
          "requires": {
            "@babel/code-frame": "^7.5.5",
            "@babel/generator": "^7.7.2",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "@babel/parser": "^7.7.2",
            "@babel/types": "^7.7.2",
            "debug": "^4.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.13"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "convert-source-map": {
          "version": "1.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/convert-source-map/-/convert-source-map-1.7.0.tgz",
          "integrity": "sha1-F6LLiC1/d9NJBYXizmxSRCSjpEI=",
          "requires": {
            "safe-buffer": "~5.1.1"
          }
        },
        "safe-buffer": {
          "version": "5.1.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/safe-buffer/-/safe-buffer-5.1.2.tgz",
          "integrity": "sha1-mR7GnSluAxN0fVm9/St0XDX4go0="
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/semver/-/semver-5.7.1.tgz",
          "integrity": "sha1-qVT5Ma66UI0we78Gnv8MAclhFvc="
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
        }
      }
    },
    "@babel/generator": {
      "version": "7.6.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.6.4.tgz",
      "integrity": "sha1-pPhDcoe/lnGwf0g7duO7cxvJdnE=",
      "requires": {
        "@babel/types": "^7.6.3",
        "jsesc": "^2.5.1",
        "lodash": "^4.17.13",
        "source-map": "^0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "2.5.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/jsesc/-/jsesc-2.5.2.tgz",
          "integrity": "sha1-gFZNLkg9rPbo7yCWUKZ98/DCg6Q="
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
        }
      }
    },
    "@babel/helper-annotate-as-pure": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.7.0.tgz",
      "integrity": "sha1-78VAMtQ4kf4mdnnmP2hgqn2/Sl4=",
      "requires": {
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.7.0.tgz",
      "integrity": "sha1-Mt2VUdbtOl/C7cUNaRKFKqGCdNk=",
      "dev": true,
      "requires": {
        "@babel/helper-explode-assignable-expression": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-builder-react-jsx": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-builder-react-jsx/-/helper-builder-react-jsx-7.7.0.tgz",
      "integrity": "sha1-xrglTTBbrNYr62SOTep9PtefNS0=",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.0",
        "esutils": "^2.0.0"
      },
      "dependencies": {
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-call-delegate": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-call-delegate/-/helper-call-delegate-7.7.0.tgz",
      "integrity": "sha1-34lCRSwsGiFzNcp+OTua/Gf2aNw=",
      "dev": true,
      "requires": {
        "@babel/helper-hoist-variables": "^7.7.0",
        "@babel/traverse": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/generator": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.7.2.tgz",
          "integrity": "sha1-L0hS0EExpeF+pPZkVIi12mbr868=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.2",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.13",
            "source-map": "^0.5.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/traverse": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.7.2.tgz",
          "integrity": "sha1-7wpl4HovPFUJZzZrPZtioty+rgk=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.5.5",
            "@babel/generator": "^7.7.2",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "@babel/parser": "^7.7.2",
            "@babel/types": "^7.7.2",
            "debug": "^4.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.13"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "debug": {
          "version": "4.1.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/debug/-/debug-4.1.1.tgz",
          "integrity": "sha1-O3ImAlUQnGtYnO4FDx1RYTlmR5E=",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/helper-create-class-features-plugin": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.7.0.tgz",
      "integrity": "sha1-vNwiOrv904b5QZauJUSYf433deg=",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.7.0",
        "@babel/helper-member-expression-to-functions": "^7.7.0",
        "@babel/helper-optimise-call-expression": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.7.0",
        "@babel/helper-split-export-declaration": "^7.7.0"
      },
      "dependencies": {
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-create-regexp-features-plugin": {
      "version": "7.7.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.7.2.tgz",
      "integrity": "sha1-byBEN3jI/OKvL/QgYoSvwM7WXbY=",
      "dev": true,
      "requires": {
        "@babel/helper-regex": "^7.4.4",
        "regexpu-core": "^4.6.0"
      }
    },
    "@babel/helper-define-map": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-define-map/-/helper-define-map-7.7.0.tgz",
      "integrity": "sha1-YLDp/WDe+d5QVMOK/ejI7kCcdSk=",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.7.0",
        "@babel/types": "^7.7.0",
        "lodash": "^4.17.13"
      },
      "dependencies": {
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-explode-assignable-expression": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.7.0.tgz",
      "integrity": "sha1-2ypnBVVa4fnzO0uCEqVGvH+dw+8=",
      "dev": true,
      "requires": {
        "@babel/traverse": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/generator": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.7.2.tgz",
          "integrity": "sha1-L0hS0EExpeF+pPZkVIi12mbr868=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.2",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.13",
            "source-map": "^0.5.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/traverse": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.7.2.tgz",
          "integrity": "sha1-7wpl4HovPFUJZzZrPZtioty+rgk=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.5.5",
            "@babel/generator": "^7.7.2",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "@babel/parser": "^7.7.2",
            "@babel/types": "^7.7.2",
            "debug": "^4.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.13"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/helper-function-name": {
      "version": "7.1.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.1.0.tgz",
      "integrity": "sha1-oM6wFoX3M1XUNgwSR/WCv6/I/1M=",
      "requires": {
        "@babel/helper-get-function-arity": "^7.0.0",
        "@babel/template": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.0.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.0.0.tgz",
      "integrity": "sha1-g1ctQyDipGVyY3NBE8QoaLZOScM=",
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-hoist-variables": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-hoist-variables/-/helper-hoist-variables-7.7.0.tgz",
      "integrity": "sha1-tFUuTP5Vd9feexg+GT6E5OxTjIE=",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.7.0.tgz",
      "integrity": "sha1-RyuTADpXBx+VpUHqbCsJg5i8rYo=",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.0.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-module-imports/-/helper-module-imports-7.0.0.tgz",
      "integrity": "sha1-lggbcRHkhtpNLNlxrRpP4hbMLj0=",
      "requires": {
        "@babel/types": "^7.0.0"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-module-transforms/-/helper-module-transforms-7.7.0.tgz",
      "integrity": "sha1-FUpp8MW4/U055JdQ/3rE+qPzZ4Y=",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.7.0",
        "@babel/helper-simple-access": "^7.7.0",
        "@babel/helper-split-export-declaration": "^7.7.0",
        "@babel/template": "^7.7.0",
        "@babel/types": "^7.7.0",
        "lodash": "^4.17.13"
      },
      "dependencies": {
        "@babel/helper-module-imports": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-module-imports/-/helper-module-imports-7.7.0.tgz",
          "integrity": "sha1-mcCViJRm5fe21m2Y3/xYuq9CZU0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.7.0.tgz",
      "integrity": "sha1-T2aiFhFqZhZBNdxhjF2LepWfk2U=",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.0.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-plugin-utils/-/helper-plugin-utils-7.0.0.tgz",
      "integrity": "sha1-u7P77phmHFaQNCN8wDlnupm08lA="
    },
    "@babel/helper-regex": {
      "version": "7.5.5",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-regex/-/helper-regex-7.5.5.tgz",
      "integrity": "sha1-CqaCT3EAouDonBUnwjk2wVLKs1E=",
      "dev": true,
      "requires": {
        "lodash": "^4.17.13"
      }
    },
    "@babel/helper-remap-async-to-generator": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.7.0.tgz",
      "integrity": "sha1-TWnsZT6L/1vOYvXTP8FQjyI8dac=",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.7.0",
        "@babel/helper-wrap-function": "^7.7.0",
        "@babel/template": "^7.7.0",
        "@babel/traverse": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/generator": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.7.2.tgz",
          "integrity": "sha1-L0hS0EExpeF+pPZkVIi12mbr868=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.2",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.13",
            "source-map": "^0.5.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/traverse": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.7.2.tgz",
          "integrity": "sha1-7wpl4HovPFUJZzZrPZtioty+rgk=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.5.5",
            "@babel/generator": "^7.7.2",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "@babel/parser": "^7.7.2",
            "@babel/types": "^7.7.2",
            "debug": "^4.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.13"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-replace-supers/-/helper-replace-supers-7.7.0.tgz",
      "integrity": "sha1-1TZchmf+fL0TuN3dzrm9fys4dRI=",
      "dev": true,
      "requires": {
        "@babel/helper-member-expression-to-functions": "^7.7.0",
        "@babel/helper-optimise-call-expression": "^7.7.0",
        "@babel/traverse": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/generator": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.7.2.tgz",
          "integrity": "sha1-L0hS0EExpeF+pPZkVIi12mbr868=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.2",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.13",
            "source-map": "^0.5.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/traverse": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.7.2.tgz",
          "integrity": "sha1-7wpl4HovPFUJZzZrPZtioty+rgk=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.5.5",
            "@babel/generator": "^7.7.2",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "@babel/parser": "^7.7.2",
            "@babel/types": "^7.7.2",
            "debug": "^4.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.13"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "debug": {
          "version": "4.1.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/debug/-/debug-4.1.1.tgz",
          "integrity": "sha1-O3ImAlUQnGtYnO4FDx1RYTlmR5E=",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "jsesc": {
          "version": "2.5.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/jsesc/-/jsesc-2.5.2.tgz",
          "integrity": "sha1-gFZNLkg9rPbo7yCWUKZ98/DCg6Q=",
          "dev": true
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-simple-access/-/helper-simple-access-7.7.0.tgz",
      "integrity": "sha1-l6i2xSEF12AxuGI33BhStEg3JD0=",
      "dev": true,
      "requires": {
        "@babel/template": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.4.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.4.4.tgz",
      "integrity": "sha1-/5SJSjQL549T8GrwOLIFxJ2ZNnc=",
      "requires": {
        "@babel/types": "^7.4.4"
      }
    },
    "@babel/helper-wrap-function": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-wrap-function/-/helper-wrap-function-7.7.0.tgz",
      "integrity": "sha1-Fa89Ppj4QXpgVUrLtsFOdeCzO3Q=",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.7.0",
        "@babel/template": "^7.7.0",
        "@babel/traverse": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/generator": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.7.2.tgz",
          "integrity": "sha1-L0hS0EExpeF+pPZkVIi12mbr868=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.2",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.13",
            "source-map": "^0.5.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/traverse": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.7.2.tgz",
          "integrity": "sha1-7wpl4HovPFUJZzZrPZtioty+rgk=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.5.5",
            "@babel/generator": "^7.7.2",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "@babel/parser": "^7.7.2",
            "@babel/types": "^7.7.2",
            "debug": "^4.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.13"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
          "dev": true
        }
      }
    },
    "@babel/helpers": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helpers/-/helpers-7.7.0.tgz",
      "integrity": "sha1-NZu1rDtHJvfB/eDsdfZLP0J11gs=",
      "requires": {
        "@babel/template": "^7.7.0",
        "@babel/traverse": "^7.7.0",
        "@babel/types": "^7.7.0"
      },
      "dependencies": {
        "@babel/generator": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/generator/-/generator-7.7.2.tgz",
          "integrity": "sha1-L0hS0EExpeF+pPZkVIi12mbr868=",
          "requires": {
            "@babel/types": "^7.7.2",
            "jsesc": "^2.5.1",
            "lodash": "^4.17.13",
            "source-map": "^0.5.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM="
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/traverse": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.7.2.tgz",
          "integrity": "sha1-7wpl4HovPFUJZzZrPZtioty+rgk=",
          "requires": {
            "@babel/code-frame": "^7.5.5",
            "@babel/generator": "^7.7.2",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "@babel/parser": "^7.7.2",
            "@babel/types": "^7.7.2",
            "debug": "^4.1.0",
            "globals": "^11.1.0",
            "lodash": "^4.17.13"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "source-map": {
          "version": "0.5.7",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/source-map/-/source-map-0.5.7.tgz",
          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
        }
      }
    },
    "@babel/highlight": {
      "version": "7.5.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/highlight/-/highlight-7.5.0.tgz",
      "integrity": "sha1-VtETEr2SSPphlZHQJHK+boyzJUA=",
      "requires": {
        "chalk": "^2.0.0",
        "esutils": "^2.0.2",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.6.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.6.4.tgz",
      "integrity": "sha1-y5s2p0ghECgtXLbdQk7JJitHPYE="
    },
    "@babel/plugin-proposal-async-generator-functions": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.7.0.tgz",
      "integrity": "sha1-g+8tYERJa0wV2LSQTiIZ5tzMaXE=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-remap-async-to-generator": "^7.7.0",
        "@babel/plugin-syntax-async-generators": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-class-properties": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.7.0.tgz",
      "integrity": "sha1-rFTnKOz4HZDo9NKpwFqJBFcQeRc=",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      },
      "dependencies": {
        "@babel/helper-create-class-features-plugin": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.7.0.tgz",
          "integrity": "sha1-vNwiOrv904b5QZauJUSYf433deg=",
          "dev": true,
          "requires": {
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-member-expression-to-functions": "^7.7.0",
            "@babel/helper-optimise-call-expression": "^7.7.0",
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-replace-supers": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0"
          }
        },
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/plugin-proposal-decorators": {
      "version": "7.6.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.6.0.tgz",
      "integrity": "sha1-ZlnSVyoX1wq9aBI+iaEqQ9kKoww=",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.6.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-decorators": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-dynamic-import": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.7.0.tgz",
      "integrity": "sha1-3AKoutjWU/tZ2vCFUW+kFu3Sqn8=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-dynamic-import": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-json-strings": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.2.0.tgz",
      "integrity": "sha1-Vo7MRGxhSK5rJn8CVREwiR4p8xc=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-json-strings": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-object-rest-spread": {
      "version": "7.6.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.6.2.tgz",
      "integrity": "sha1-j/zMjzplRen3iYi2v0/ogbiOgJY=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.2.0.tgz",
      "integrity": "sha1-E12B7baKCB5V5W7EhUHs6AZcOPU=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.2.0"
      }
    },
    "@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.7.0.tgz",
      "integrity": "sha1-VJ/hcXob0KKn5jFjhByzfngXnV0=",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-async-generators": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.2.0.tgz",
      "integrity": "sha1-aeHw2zTG9aDPfiszI78VmnbIy38=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-class-properties": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.2.0.tgz",
      "integrity": "sha1-I7O3ubzavXNnKpFJ9yjNO+YhSBI=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-decorators": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.2.0.tgz",
      "integrity": "sha1-xQsblX3MaeSxEntl4cM+72FXDBs=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-dynamic-import": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.2.0.tgz",
      "integrity": "sha1-acFZ/69JmBIhYa2OvF5tH1XfhhI=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-flow": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.7.0.tgz",
      "integrity": "sha1-XJRlvNJjVNUhUpTqkKsccGpXE4Y=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-json-strings": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.2.0.tgz",
      "integrity": "sha1-cr0T9v/h0lk4Ep0qGGsR/WKVFHA=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-jsx": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.2.0.tgz",
      "integrity": "sha1-C4WjtLx830zEuL8jYzW5B8oi58c=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-object-rest-spread": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.2.0.tgz",
      "integrity": "sha1-O3o+czUQxX6CC5FCpleayLDfrS4=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.2.0.tgz",
      "integrity": "sha1-qUAT1u2okI3+akd+f57ahWVuz1w=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-top-level-await": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.7.0.tgz",
      "integrity": "sha1-9WmVSfULvo0SsYQ6ToLwo3u2X00=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-typescript": {
      "version": "7.3.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.3.3.tgz",
      "integrity": "sha1-p8w/ZhGan36+LeU4PM4ZNHPWWZE=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-arrow-functions": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.2.0.tgz",
      "integrity": "sha1-mur75Nb/xlY7+Pg3IJFijwB3lVA=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-async-to-generator": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.7.0.tgz",
      "integrity": "sha1-4rhPEZUs9ZE/40OLfSWFBCdy9JI=",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-remap-async-to-generator": "^7.7.0"
      },
      "dependencies": {
        "@babel/helper-module-imports": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-module-imports/-/helper-module-imports-7.7.0.tgz",
          "integrity": "sha1-mcCViJRm5fe21m2Y3/xYuq9CZU0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        }
      }
    },
    "@babel/plugin-transform-block-scoped-functions": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.2.0.tgz",
      "integrity": "sha1-XTzBHo1d3XUqpkyRSNDbbLef0ZA=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-block-scoping": {
      "version": "7.6.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.6.3.tgz",
      "integrity": "sha1-boVOUfu6qENRsV1N2v40LzpdVCo=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "lodash": "^4.17.13"
      }
    },
    "@babel/plugin-transform-classes": {
      "version": "7.5.5",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-classes/-/plugin-transform-classes-7.5.5.tgz",
      "integrity": "sha1-0JQpnZvWgKFKKg7a44MFrWD7Tek=",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.0.0",
        "@babel/helper-define-map": "^7.5.5",
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-optimise-call-expression": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.5.5",
        "@babel/helper-split-export-declaration": "^7.4.4",
        "globals": "^11.1.0"
      }
    },
    "@babel/plugin-transform-computed-properties": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.2.0.tgz",
      "integrity": "sha1-g6ffamWIZbHI9kHVEMbzryICFto=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-destructuring": {
      "version": "7.6.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.6.0.tgz",
      "integrity": "sha1-RLvgi1f0SACU1X2f+82W0wkHW6Y=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-dotall-regex": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.7.0.tgz",
      "integrity": "sha1-xcnsrKs6XgwR22mBYQ8MMv1pizs=",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-duplicate-keys": {
      "version": "7.5.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.5.0.tgz",
      "integrity": "sha1-xdv1EGv4TN9pEiLAl0wSsd+TGFM=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-exponentiation-operator": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.2.0.tgz",
      "integrity": "sha1-pjhoKJ5bQAf3BU1GSRr1FDV2YAg=",
      "dev": true,
      "requires": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.1.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-flow-strip-types": {
      "version": "7.6.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.6.3.tgz",
      "integrity": "sha1-gRDxU+c2DP1Zlu7mhwbPrZLYUlY=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-flow": "^7.2.0"
      }
    },
    "@babel/plugin-transform-for-of": {
      "version": "7.4.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.4.4.tgz",
      "integrity": "sha1-Amf8c14kyAi6FzhmxsTRRA/DxVY=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-function-name": {
      "version": "7.4.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.4.4.tgz",
      "integrity": "sha1-4UNhFquwYQwiWQlISHVKxSMJIq0=",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-literals": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-literals/-/plugin-transform-literals-7.2.0.tgz",
      "integrity": "sha1-aQNT6B+SZ9rU/Yz9d+r6hqulPqE=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-member-expression-literals": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.2.0.tgz",
      "integrity": "sha1-+hCqXFiiy2r88sn/qMtNiz1Imi0=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-modules-amd": {
      "version": "7.5.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.5.0.tgz",
      "integrity": "sha1-7wBDXUbaCllhqnKKHS7P8GPk+5E=",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.1.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "babel-plugin-dynamic-import-node": "^2.3.0"
      }
    },
    "@babel/plugin-transform-modules-commonjs": {
      "version": "7.6.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.6.0.tgz",
      "integrity": "sha1-Od/pV95EIERfH8+ItoouSqRRVIY=",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.4.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-simple-access": "^7.1.0",
        "babel-plugin-dynamic-import-node": "^2.3.0"
      }
    },
    "@babel/plugin-transform-modules-systemjs": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.7.0.tgz",
      "integrity": "sha1-m69HEhOvl2HBYXuxL9J45ikEFBc=",
      "dev": true,
      "requires": {
        "@babel/helper-hoist-variables": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "babel-plugin-dynamic-import-node": "^2.3.0"
      }
    },
    "@babel/plugin-transform-modules-umd": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.7.0.tgz",
      "integrity": "sha1-1ix9oWZwkI4djGjKC11MAJe2mWY=",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.7.0.tgz",
      "integrity": "sha1-NY5v2Gm5pNj1y8eeTtT8NA5g3K8=",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.0"
      }
    },
    "@babel/plugin-transform-new-target": {
      "version": "7.4.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.4.4.tgz",
      "integrity": "sha1-GNEgQ4sMye6VpH8scryXaPvtYKU=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-object-super": {
      "version": "7.5.5",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.5.5.tgz",
      "integrity": "sha1-xwAh34NAc8ZethO4Z5zEo4HRqfk=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.5.5"
      }
    },
    "@babel/plugin-transform-parameters": {
      "version": "7.4.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.4.4.tgz",
      "integrity": "sha1-dVbPA/MYvScZ/kySLS2Ai+VXHhY=",
      "dev": true,
      "requires": {
        "@babel/helper-call-delegate": "^7.4.4",
        "@babel/helper-get-function-arity": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-property-literals": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.2.0.tgz",
      "integrity": "sha1-A+M/ZT9bJcTrVyyYuUhQVbOJ6QU=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-react-constant-elements": {
      "version": "7.6.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-react-constant-elements/-/plugin-transform-react-constant-elements-7.6.3.tgz",
      "integrity": "sha1-n8nqBguYPHwDWsvkgcvh+xJFv/8=",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-react-display-name": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.2.0.tgz",
      "integrity": "sha1-6/rth4NM6NxCeWCaTwwyTBVuPrA=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-react-jsx": {
      "version": "7.3.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.3.0.tgz",
      "integrity": "sha1-8sq5kCZjHHZ+J0WlNoszHP6PUpA=",
      "dev": true,
      "requires": {
        "@babel/helper-builder-react-jsx": "^7.3.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.2.0"
      }
    },
    "@babel/plugin-transform-react-jsx-self": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.2.0.tgz",
      "integrity": "sha1-Rh4hrZR48QMd1eJ2EI0CfxtSQLo=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.2.0"
      }
    },
    "@babel/plugin-transform-react-jsx-source": {
      "version": "7.5.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.5.0.tgz",
      "integrity": "sha1-WDsQxJzwV+I3CFvL2MyWC9g72Ws=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.2.0"
      }
    },
    "@babel/plugin-transform-regenerator": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.7.0.tgz",
      "integrity": "sha1-8bILU153FrYiyZ6YklnX3ZQt2cw=",
      "dev": true,
      "requires": {
        "regenerator-transform": "^0.14.0"
      },
      "dependencies": {
        "regenerator-transform": {
          "version": "0.14.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/regenerator-transform/-/regenerator-transform-0.14.1.tgz",
          "integrity": "sha1-Oy/OThq3cywI9mXf2zFHScfd0vs=",
          "dev": true,
          "requires": {
            "private": "^0.1.6"
          }
        }
      }
    },
    "@babel/plugin-transform-reserved-words": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.2.0.tgz",
      "integrity": "sha1-R5Kvh8mYpJNnWX0H/t8CY20uFjQ=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-runtime": {
      "version": "7.6.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.6.0.tgz",
      "integrity": "sha1-haPM5AKyhYYTjjaPziCrMBm5cT4=",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "resolve": "^1.8.1",
        "semver": "^5.5.1"
      },
      "dependencies": {
        "semver": {
          "version": "5.7.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/semver/-/semver-5.7.1.tgz",
          "integrity": "sha1-qVT5Ma66UI0we78Gnv8MAclhFvc=",
          "dev": true
        }
      }
    },
    "@babel/plugin-transform-shorthand-properties": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.2.0.tgz",
      "integrity": "sha1-YzOu4vjW7n4oYVRXKYk0o7RhmPA=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-spread": {
      "version": "7.6.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-spread/-/plugin-transform-spread-7.6.2.tgz",
      "integrity": "sha1-/HfPeYsksQxG4bUbG4jCv2YbuN0=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-sticky-regex": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.2.0.tgz",
      "integrity": "sha1-oeRUtZlVYKnB4NU338FQYf0mh+E=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-regex": "^7.0.0"
      }
    },
    "@babel/plugin-transform-template-literals": {
      "version": "7.4.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.4.4.tgz",
      "integrity": "sha1-nSj+p7vOY3+3YSoHUJidgyHUvLA=",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-typeof-symbol": {
      "version": "7.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.2.0.tgz",
      "integrity": "sha1-EX0rzsL79ktLWdH5gZiUaC0p8rI=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-typescript": {
      "version": "7.7.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-typescript/-/plugin-transform-typescript-7.7.2.tgz",
      "integrity": "sha1-658UxRa1029Nbzqde62ubQ/DE9Q=",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-typescript": "^7.2.0"
      }
    },
    "@babel/plugin-transform-unicode-regex": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.7.0.tgz",
      "integrity": "sha1-dD2bzEQIDjzH1JJZoGbvow+Rh6M=",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/polyfill": {
      "version": "7.7.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/polyfill/-/polyfill-7.7.0.tgz",
      "integrity": "sha1-4QZuJR4XYG7HkIsFYX+bf4GA2PM=",
      "requires": {
        "core-js": "^2.6.5",
        "regenerator-runtime": "^0.13.2"
      },
      "dependencies": {
        "core-js": {
          "version": "2.6.10",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/core-js/-/core-js-2.6.10.tgz",
          "integrity": "sha1-iluDkfjMcBPacDQRzltYVwYwDX8="
        },
        "regenerator-runtime": {
          "version": "0.13.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
          "integrity": "sha1-fPanfY9cb2Drc8X8GVWyzrAea/U="
        }
      }
    },
    "@babel/preset-env": {
      "version": "7.7.1",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/preset-env/-/preset-env-7.7.1.tgz",
      "integrity": "sha1-BKL/U1UsWIXPEIPikcjdVJD3RLs=",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.7.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-async-generator-functions": "^7.7.0",
        "@babel/plugin-proposal-dynamic-import": "^7.7.0",
        "@babel/plugin-proposal-json-strings": "^7.2.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.6.2",
        "@babel/plugin-proposal-optional-catch-binding": "^7.2.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.7.0",
        "@babel/plugin-syntax-async-generators": "^7.2.0",
        "@babel/plugin-syntax-dynamic-import": "^7.2.0",
        "@babel/plugin-syntax-json-strings": "^7.2.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.2.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.2.0",
        "@babel/plugin-syntax-top-level-await": "^7.7.0",
        "@babel/plugin-transform-arrow-functions": "^7.2.0",
        "@babel/plugin-transform-async-to-generator": "^7.7.0",
        "@babel/plugin-transform-block-scoped-functions": "^7.2.0",
        "@babel/plugin-transform-block-scoping": "^7.6.3",
        "@babel/plugin-transform-classes": "^7.7.0",
        "@babel/plugin-transform-computed-properties": "^7.2.0",
        "@babel/plugin-transform-destructuring": "^7.6.0",
        "@babel/plugin-transform-dotall-regex": "^7.7.0",
        "@babel/plugin-transform-duplicate-keys": "^7.5.0",
        "@babel/plugin-transform-exponentiation-operator": "^7.2.0",
        "@babel/plugin-transform-for-of": "^7.4.4",
        "@babel/plugin-transform-function-name": "^7.7.0",
        "@babel/plugin-transform-literals": "^7.2.0",
        "@babel/plugin-transform-member-expression-literals": "^7.2.0",
        "@babel/plugin-transform-modules-amd": "^7.5.0",
        "@babel/plugin-transform-modules-commonjs": "^7.7.0",
        "@babel/plugin-transform-modules-systemjs": "^7.7.0",
        "@babel/plugin-transform-modules-umd": "^7.7.0",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.7.0",
        "@babel/plugin-transform-new-target": "^7.4.4",
        "@babel/plugin-transform-object-super": "^7.5.5",
        "@babel/plugin-transform-parameters": "^7.4.4",
        "@babel/plugin-transform-property-literals": "^7.2.0",
        "@babel/plugin-transform-regenerator": "^7.7.0",
        "@babel/plugin-transform-reserved-words": "^7.2.0",
        "@babel/plugin-transform-shorthand-properties": "^7.2.0",
        "@babel/plugin-transform-spread": "^7.6.2",
        "@babel/plugin-transform-sticky-regex": "^7.2.0",
        "@babel/plugin-transform-template-literals": "^7.4.4",
        "@babel/plugin-transform-typeof-symbol": "^7.2.0",
        "@babel/plugin-transform-unicode-regex": "^7.7.0",
        "@babel/types": "^7.7.1",
        "browserslist": "^4.6.0",
        "core-js-compat": "^3.1.1",
        "invariant": "^2.2.2",
        "js-levenshtein": "^1.1.3",
        "semver": "^5.5.0"
      },
      "dependencies": {
        "@babel/helper-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-function-name/-/helper-function-name-7.7.0.tgz",
          "integrity": "sha1-RKWtFRz/+O0lmckWgt2i7CyEMKM=",
          "dev": true,
          "requires": {
            "@babel/helper-get-function-arity": "^7.7.0",
            "@babel/template": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-get-function-arity": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.0.tgz",
          "integrity": "sha1-xgSIa8lyh6HROYCSvGZrw9fXqi0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-module-imports": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-module-imports/-/helper-module-imports-7.7.0.tgz",
          "integrity": "sha1-mcCViJRm5fe21m2Y3/xYuq9CZU0=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/helper-split-export-declaration": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.0.tgz",
          "integrity": "sha1-E2XnTqbGFN7rVuv/q9cQBqDrIwA=",
          "dev": true,
          "requires": {
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/parser": {
          "version": "7.7.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/parser/-/parser-7.7.3.tgz",
          "integrity": "sha1-X61FfCUp3kdqJI91sPCQswYK8EM=",
          "dev": true
        },
        "@babel/plugin-transform-classes": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-classes/-/plugin-transform-classes-7.7.0.tgz",
          "integrity": "sha1-tBHswbiCLSS4Hl0YTyQUkTbt3Uo=",
          "dev": true,
          "requires": {
            "@babel/helper-annotate-as-pure": "^7.7.0",
            "@babel/helper-define-map": "^7.7.0",
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-optimise-call-expression": "^7.7.0",
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-replace-supers": "^7.7.0",
            "@babel/helper-split-export-declaration": "^7.7.0",
            "globals": "^11.1.0"
          }
        },
        "@babel/plugin-transform-function-name": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.7.0.tgz",
          "integrity": "sha1-D6eG8e71Ljt9T8AuVLISneigTCo=",
          "dev": true,
          "requires": {
            "@babel/helper-function-name": "^7.7.0",
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-modules-commonjs": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.7.0.tgz",
          "integrity": "sha1-Pl/7T9jJR/7t5py+JMlVSrQRP+M=",
          "dev": true,
          "requires": {
            "@babel/helper-module-transforms": "^7.7.0",
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/helper-simple-access": "^7.7.0",
            "babel-plugin-dynamic-import-node": "^2.3.0"
          }
        },
        "@babel/template": {
          "version": "7.7.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.7.0.tgz",
          "integrity": "sha1-T63BuOc02X9W3jnHfedvJWLll9A=",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "@babel/parser": "^7.7.0",
            "@babel/types": "^7.7.0"
          }
        },
        "@babel/types": {
          "version": "7.7.2",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.7.2.tgz",
          "integrity": "sha1-VQuC5VcdzRdK9XbiPwrbp//Gg/c=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "lodash": "^4.17.13",
            "to-fast-properties": "^2.0.0"
          }
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/semver/-/semver-5.7.1.tgz",
          "integrity": "sha1-qVT5Ma66UI0we78Gnv8MAclhFvc=",
          "dev": true
        }
      }
    },
    "@babel/preset-flow": {
      "version": "7.7.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/preset-flow/-/preset-flow-7.7.4.tgz",
      "integrity": "sha1-mcE0m2/XEyeDGW3hgeazLQlJQn4=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-transform-flow-strip-types": "^7.7.4"
      },
      "dependencies": {
        "@babel/plugin-syntax-flow": {
          "version": "7.7.4",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-syntax-flow/-/plugin-syntax-flow-7.7.4.tgz",
          "integrity": "sha1-bZG1nhoOTBfzavLhDdZO8iCRnXs=",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0"
          }
        },
        "@babel/plugin-transform-flow-strip-types": {
          "version": "7.7.4",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/plugin-transform-flow-strip-types/-/plugin-transform-flow-strip-types-7.7.4.tgz",
          "integrity": "sha1-zHP4WUR4LfHXfYCXe8CXkgqL8xo=",
          "dev": true,
          "requires": {
            "@babel/helper-plugin-utils": "^7.0.0",
            "@babel/plugin-syntax-flow": "^7.7.4"
          }
        }
      }
    },
    "@babel/preset-react": {
      "version": "7.6.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/preset-react/-/preset-react-7.6.3.tgz",
      "integrity": "sha1-1SQsgoMiUgIFrk7aXU9PYYlk4vY=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-transform-react-display-name": "^7.0.0",
        "@babel/plugin-transform-react-jsx": "^7.0.0",
        "@babel/plugin-transform-react-jsx-self": "^7.0.0",
        "@babel/plugin-transform-react-jsx-source": "^7.0.0"
      }
    },
    "@babel/preset-typescript": {
      "version": "7.6.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/preset-typescript/-/preset-typescript-7.6.0.tgz",
      "integrity": "sha1-JXaMuIMCgLr0fEWrGlGamXdJjJg=",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-transform-typescript": "^7.6.0"
      }
    },
    "@babel/runtime": {
      "version": "7.6.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/runtime/-/runtime-7.6.3.tgz",
      "integrity": "sha1-k1Eix0xz0iQMr9Mt21/Cps01zx8=",
      "requires": {
        "regenerator-runtime": "^0.13.2"
      },
      "dependencies": {
        "regenerator-runtime": {
          "version": "0.13.3",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
          "integrity": "sha1-fPanfY9cb2Drc8X8GVWyzrAea/U="
        }
      }
    },
    "@babel/template": {
      "version": "7.6.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/template/-/template-7.6.0.tgz",
      "integrity": "sha1-fwFZx/UBIjDa1kzKQuyb21yVNuY=",
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/parser": "^7.6.0",
        "@babel/types": "^7.6.0"
      }
    },
    "@babel/traverse": {
      "version": "7.6.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/traverse/-/traverse-7.6.3.tgz",
      "integrity": "sha1-ZtfboUawhnA8D7EN1Yi3NkzsR/k=",
      "requires": {
        "@babel/code-frame": "^7.5.5",
        "@babel/generator": "^7.6.3",
        "@babel/helper-function-name": "^7.1.0",
        "@babel/helper-split-export-declaration": "^7.4.4",
        "@babel/parser": "^7.6.3",
        "@babel/types": "^7.6.3",
        "debug": "^4.1.0",
        "globals": "^11.1.0",
        "lodash": "^4.17.13"
      },
      "dependencies": {
        "debug": {
          "version": "4.1.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/debug/-/debug-4.1.1.tgz",
          "integrity": "sha1-O3ImAlUQnGtYnO4FDx1RYTlmR5E=",
          "requires": {
            "ms": "^2.1.1"
          }
        }
      }
    },
    "@babel/types": {
      "version": "7.6.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@babel/types/-/types-7.6.3.tgz",
      "integrity": "sha1-PwfZb4VPmOL71FxksMuULRHougk=",
      "requires": {
        "esutils": "^2.0.2",
        "lodash": "^4.17.13",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@base2/pretty-print-object": {
      "version": "1.0.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@base2/pretty-print-object/-/pretty-print-object-1.0.0.tgz",
      "integrity": "sha1-hgznGLC3P0AJ4VNUH6/yy2uF0Ec=",
      "dev": true
    },
    "@cnakazawa/watch": {
      "version": "1.0.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@cnakazawa/watch/-/watch-1.0.3.tgz",
      "integrity": "sha1-CZE56ux+vweifBeGo/9k85Rk0u8=",
      "requires": {
        "exec-sh": "^0.3.2",
        "minimist": "^1.2.0"
      }
    },
    "@commitlint/execute-rule": {
      "version": "8.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@commitlint/execute-rule/-/execute-rule-8.2.0.tgz",
      "integrity": "sha1-rvs3ROImE2YK3vt+vMyqYL0k540=",
      "dev": true,
      "optional": true
    },
    "@commitlint/load": {
      "version": "8.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@commitlint/load/-/load-8.2.0.tgz",
      "integrity": "sha1-nKU6DHleT2PXlrTUInnoVlSa3Ro=",
      "dev": true,
      "optional": true,
      "requires": {
        "@commitlint/execute-rule": "^8.2.0",
        "@commitlint/resolve-extends": "^8.2.0",
        "babel-runtime": "^6.23.0",
        "chalk": "2.4.2",
        "cosmiconfig": "^5.2.0",
        "lodash": "4.17.14",
        "resolve-from": "^5.0.0"
      },
      "dependencies": {
        "lodash": {
          "version": "4.17.14",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/lodash/-/lodash-4.17.14.tgz",
          "integrity": "sha1-nOSHrmbJYlT+ILWZ8htoFgKAeLo=",
          "dev": true,
          "optional": true
        }
      }
    },
    "@commitlint/resolve-extends": {
      "version": "8.2.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@commitlint/resolve-extends/-/resolve-extends-8.2.0.tgz",
      "integrity": "sha1-t/LwxxwQ8kuYoZntEdLBTP16MY8=",
      "dev": true,
      "optional": true,
      "requires": {
        "@types/node": "^12.0.2",
        "import-fresh": "^3.0.0",
        "lodash": "4.17.14",
        "resolve-from": "^5.0.0",
        "resolve-global": "^1.0.0"
      },
      "dependencies": {
        "lodash": {
          "version": "4.17.14",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/lodash/-/lodash-4.17.14.tgz",
          "integrity": "sha1-nOSHrmbJYlT+ILWZ8htoFgKAeLo=",
          "dev": true,
          "optional": true
        }
      }
    },
    "@emotion/cache": {
      "version": "10.0.19",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/cache/-/cache-10.0.19.tgz",
      "integrity": "sha1-0ljZTZxwfcra8VWN75aLhruHrXE=",
      "requires": {
        "@emotion/sheet": "0.9.3",
        "@emotion/stylis": "0.8.4",
        "@emotion/utils": "0.11.2",
        "@emotion/weak-memoize": "0.2.4"
      }
    },
    "@emotion/core": {
      "version": "10.0.22",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/core/-/core-10.0.22.tgz",
      "integrity": "sha1-Kse8+bmaGXmrWwqHb783qwaIsXc=",
      "requires": {
        "@babel/runtime": "^7.5.5",
        "@emotion/cache": "^10.0.17",
        "@emotion/css": "^10.0.22",
        "@emotion/serialize": "^0.11.12",
        "@emotion/sheet": "0.9.3",
        "@emotion/utils": "0.11.2"
      }
    },
    "@emotion/css": {
      "version": "10.0.22",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/css/-/css-10.0.22.tgz",
      "integrity": "sha1-N7GrtoJnWf6KwK8KwANNJ95tF5M=",
      "requires": {
        "@emotion/serialize": "^0.11.12",
        "@emotion/utils": "0.11.2",
        "babel-plugin-emotion": "^10.0.22"
      }
    },
    "@emotion/hash": {
      "version": "0.7.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/hash/-/hash-0.7.3.tgz",
      "integrity": "sha1-oWaILIHAxgQJdd0w3yT66FSb2W8="
    },
    "@emotion/is-prop-valid": {
      "version": "0.8.5",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/is-prop-valid/-/is-prop-valid-0.8.5.tgz",
      "integrity": "sha1-LdoHkfDq+hK3oKWzmFhAXMe96YM=",
      "requires": {
        "@emotion/memoize": "0.7.3"
      }
    },
    "@emotion/memoize": {
      "version": "0.7.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/memoize/-/memoize-0.7.3.tgz",
      "integrity": "sha1-W2scEdam3d8fL8mW90zzshlkTXg="
    },
    "@emotion/serialize": {
      "version": "0.11.14",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/serialize/-/serialize-0.11.14.tgz",
      "integrity": "sha1-VqbY0E2DfMWwEmeIshNMUTU8ZIg=",
      "requires": {
        "@emotion/hash": "0.7.3",
        "@emotion/memoize": "0.7.3",
        "@emotion/unitless": "0.7.4",
        "@emotion/utils": "0.11.2",
        "csstype": "^2.5.7"
      }
    },
    "@emotion/sheet": {
      "version": "0.9.3",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/sheet/-/sheet-0.9.3.tgz",
      "integrity": "sha1-aJ8TXs+H08ZQ7QxPXdy+V5iDVko="
    },
    "@emotion/styled": {
      "version": "10.0.23",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/styled/-/styled-10.0.23.tgz",
      "integrity": "sha1-L4J5vVm5nYLeredtEEYknd+rfBs=",
      "requires": {
        "@emotion/styled-base": "^10.0.23",
        "babel-plugin-emotion": "^10.0.23"
      }
    },
    "@emotion/styled-base": {
      "version": "10.0.24",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/styled-base/-/styled-base-10.0.24.tgz",
      "integrity": "sha1-lJfv2JAt/t3uidJLDusmsGZb/os=",
      "requires": {
        "@babel/runtime": "^7.5.5",
        "@emotion/is-prop-valid": "0.8.5",
        "@emotion/serialize": "^0.11.14",
        "@emotion/utils": "0.11.2"
      }
    },
    "@emotion/stylis": {
      "version": "0.8.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/stylis/-/stylis-0.8.4.tgz",
      "integrity": "sha1-bFGv3x3Q1zZmugnS62wlwiDW/kw="
    },
    "@emotion/unitless": {
      "version": "0.7.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/unitless/-/unitless-0.7.4.tgz",
      "integrity": "sha1-qHtLBOWuFKiNSOvvFQFfa30fVnc="
    },
    "@emotion/utils": {
      "version": "0.11.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/utils/-/utils-0.11.2.tgz",
      "integrity": "sha1-cTBWv9/7OWsKFPHI8Y57TQ0gAYM="
    },
    "@emotion/weak-memoize": {
      "version": "0.2.4",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@emotion/weak-memoize/-/weak-memoize-0.2.4.tgz",
      "integrity": "sha1-Yipyvr0eP0jZIVY7S2CnYilagfw="
    },
    "@evocateur/libnpmaccess": {
      "version": "3.1.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@evocateur/libnpmaccess/-/libnpmaccess-3.1.2.tgz",
      "integrity": "sha1-7Pf2zmsATp+UKwmNkiAL5KSxyEU=",
      "dev": true,
      "requires": {
        "@evocateur/npm-registry-fetch": "^4.0.0",
        "aproba": "^2.0.0",
        "figgy-pudding": "^3.5.1",
        "get-stream": "^4.0.0",
        "npm-package-arg": "^6.1.0"
      },
      "dependencies": {
        "aproba": {
          "version": "2.0.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/aproba/-/aproba-2.0.0.tgz",
          "integrity": "sha1-UlILiuW1aSFbNU78DKo/4eRaitw=",
          "dev": true
        }
      }
    },
    "@evocateur/libnpmpublish": {
      "version": "1.2.2",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@evocateur/libnpmpublish/-/libnpmpublish-1.2.2.tgz",
      "integrity": "sha1-Vd8J0tyhNq+6nIjHWconIZjbnxo=",
      "dev": true,
      "requires": {
        "@evocateur/npm-registry-fetch": "^4.0.0",
        "aproba": "^2.0.0",
        "figgy-pudding": "^3.5.1",
        "get-stream": "^4.0.0",
        "lodash.clonedeep": "^4.5.0",
        "normalize-package-data": "^2.4.0",
        "npm-package-arg": "^6.1.0",
        "semver": "^5.5.1",
        "ssri": "^6.0.1"
      },
      "dependencies": {
        "aproba": {
          "version": "2.0.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/aproba/-/aproba-2.0.0.tgz",
          "integrity": "sha1-UlILiuW1aSFbNU78DKo/4eRaitw=",
          "dev": true
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/semver/-/semver-5.7.1.tgz",
          "integrity": "sha1-qVT5Ma66UI0we78Gnv8MAclhFvc=",
          "dev": true
        }
      }
    },
    "@evocateur/npm-registry-fetch": {
      "version": "4.0.0",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@evocateur/npm-registry-fetch/-/npm-registry-fetch-4.0.0.tgz",
      "integrity": "sha1-jEw4dm2NMtMgD8sKg/BktXNl7WY=",
      "dev": true,
      "requires": {
        "JSONStream": "^1.3.4",
        "bluebird": "^3.5.1",
        "figgy-pudding": "^3.4.1",
        "lru-cache": "^5.1.1",
        "make-fetch-happen": "^5.0.0",
        "npm-package-arg": "^6.1.0",
        "safe-buffer": "^5.1.2"
      }
    },
    "@evocateur/pacote": {
      "version": "9.6.5",
      "resolved": "http://10.178.86.135/repository/npm-group-edkt/@evocateur/pacote/-/pacote-9.6.5.tgz",
      "integrity": "sha1-M94yuiELbxfCDrq01JfvxnVfSuU=",
      "dev": true,
      "requires": {
        "@evocateur/npm-registry-fetch": "^4.0.0",
        "bluebird": "^3.5.3",
        "cacache": "^12.0.3",
        "chownr": "^1.1.2",
        "figgy-pudding": "^3.5.1",
        "get-stream": "^4.1.0",
        "glob": "^7.1.4",
        "infer-owner": "^1.0.4",
        "lru-cache": "^5.1.1",
        "make-fetch-happen": "^5.0.0",
        "minimatch": "^3.0.4",
        "minipass": "^2.3.5",
        "mississippi": "^3.0.0",
        "mkdirp": "^0.5.1",
        "normalize-package-data": "^2.5.0",
        "npm-package-arg": "^6.1.0",
        "npm-packlist": "^1.4.4",
        "npm-pick-manifest": "^3.0.0",
        "osenv": "^0.1.5",
        "promise-inflight": "^1.0.1",
        "promise-retry": "^1.1.1",
        "protoduck": "^5.0.1",
        "rimraf": "^2.6.3",
        "safe-buffer": "^5.2.0",
        "semver": "^5.7.0",
        "ssri": "^6.0.1",
        "tar": "^4.4.10",
        "unique-filename": "^1.1.1",
        "which": "^1.3.1"
      },
      "dependencies": {
        "minipass": {
          "version": "2.9.0",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/minipass/-/minipass-2.9.0.tgz",
          "integrity": "sha1-5xN2Ln0+Mv7YAxFc+T4EvKn8yaY=",
          "dev": true,
          "requires": {
            "safe-buffer": "^5.1.2",
            "yallist": "^3.0.0"
          }
        },
        "semver": {
          "version": "5.7.1",
          "resolved": "http://10.178.86.135/repository/npm-group-edkt/semver/-/semver-5.7.1.tgz",
          "integrity": "sha1-qVT5Ma66UI0we78Gnv8MAclhFvc=",
          "dev": true
        }
      }
    }
  }
}

},{}],2:[function(require,module,exports){
const dataJson = require("./data.json");
const isPlainObject = require("is-plain-object");
// 根据 version key-value
const forEachDeep = (data, path, fn) => {
  if (Array.isArray(data)) {
    data.forEach((value, index) => {
      let deepPath = `${path}${index}`;
      fn(value, deepPath);
      forEachDeep(data[index], deepPath, fn);
    });
  } else if (isPlainObject(data)) {
    Object.keys(data).forEach(key => {
      let deepPath = `${path}${key}`;
      fn(data[key], deepPath);
      forEachDeep(data[key], deepPath, fn);
    });
  }
};

const fn = (data, path) => {
  if (typeof data === "string") {
    console.log(path, "---", data);
  }
};
const ad = forEachDeep(dataJson, "", fn);

},{"./data.json":1,"is-plain-object":3}],3:[function(require,module,exports){
'use strict';

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

module.exports = isPlainObject;

},{}]},{},[2]);
