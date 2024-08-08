export const validateEnv = (vars: { key: string; value: string | number }[]) => {
    vars.forEach(variable => {
      if (!variable.value) {
        throw new Error(`${variable.key} must be defined in .env file`);
      }
    });
  };
