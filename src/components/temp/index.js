        <Image
          style = {styles.imageTop}
          source = {require('../../img/sun-1.png')}
        />
        <Text style={styles.bigText}>Your input: {this.state.zip}</Text>
        <Forecast
          main = {this.state.forecast.main}
          descriptions = {this.state.forecast.descriptions}
          temp = {this.state.forecast.temp}
        />
        <TextInput
          style = {styles.textInput}
          onSubmitEditing = {this._changeText}
        />