<h1><i class="fa fa-envelope-o"></i> Emailer (Mailjet)</h1>

<div class="row">
	<div class="col-lg-12">
		<p>
			To get started:
		</p>
		<ol>
			<li>
				Register for an account on <a href="https://app.mailjet.com/signup" target="_blank">https://app.mailjet.com/signup</a>. Mailjet offers a free tier with up to 6,000 free emails monthly.
			</li>
			<li>
				Paste your API key and SECRET key into the fields below, hit save, and restart your NodeBB
			</li>
		</ol>
	</div>
</div>

<hr />

<form role="form" class="emailer-settings">
	<fieldset>
		<div class="row">
			<div class="col-sm-6">
				<div class="form-group">
					<label for="apiKey">API KEY</label>
					<input type="text" class="form-control" id="apiKey" name="apiKey" />
				</div>
			</div>
			<div class="col-sm-6">
				<div class="form-group">
					<label for="secretKey">SECRET KEY</label>
					<input type="text" class="form-control" id="secretKey" name="secretKey" />
				</div>
			</div>
		</div>

		<button class="btn btn-lg btn-primary" id="save" type="button">Save</button>
	</fieldset>
</form>