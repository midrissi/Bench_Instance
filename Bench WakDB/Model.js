
guidedModel =// @startlock
{
	Bench :
	{
		methods :
		{// @endlock
			empty:function()
			{// @lock
				ds.Company.remove();
				ds.Employee.remove();
			},// @lock
			stop:function()
			{// @lock
				return require('dgUtils').close();
			},// @lock
			status:function()
			{// @lock
				return require('dgUtils').status();
			},// @lock
			generate:function(config)
			{// @lock
				return require('dgUtils').generate(config);
			}// @startlock
		}
	},
	Company :
	{
		events :
		{
			onRemove:function()
			{// @endlock
				this.employees.remove();
			}// @startlock
		}
	}
};// @endlock
