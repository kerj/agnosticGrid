
export const columnDefs = [
  {
    headerName: 'Make',
    field: 'make',
    cellRenderer: 'select',
		cellEditor: 'base',
		editable: true,
  },
  {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'autoComplete',
  },
  {
    headerName: 'Price',
    field: 'price',
    editable: false,
  },
]

export const columnGrouping = [ 
	{
    headerName: 'Make',
    field: 'make',
    cellRenderer: 'GenericDisplayRenderer',
  },
  {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'GenericDisplayRenderer',
  },
  {
    headerName: 'Price',
    field: 'price',
		cellRenderer: 'GenericDisplayRenderer',
  },
	// {
	// 	headerName: 'Type',
	// 	field: 'type',
	// 	cellRenderer: 'GenericDisplayRenderer',
	// },
	{
		headerName: 'Type/Power Source',
		// keeps groups from being broken up by dragging them
		marryChildren: true,
		children: [
			{
				field: 'type',
				colId: 'type',
				cellRenderer: 'GenericDisplayRenderer',
			},
			{
				field: 'power',
				colId: 'power',
				cellRenderer: 'GenericDisplayRenderer',
			},
		]
	},
]


export const scheme: Record<string, any> = {
	"services": {
		"EC2": {
			"type": {
			  "x1e": {
			  	"size": ["xlarge", "2xlarge", "4xlarge", "8xlarge", "16xlarge", "32xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"],
			  },
			  "r4": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "i3": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c5ad": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "i3en": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "3xlarge", "6xlarge", "12xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r5": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m5ad": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r5a": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "t2": {
			  	"size": ["large", "medium", "micro", "nano", "small", "xlarge", "2xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m5n": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c5d": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "9xlarge", "12xlarge", "18xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c4": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m5zn": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "3xlarge", "6xlarge", "12xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "h1": {
			  	"size": ["2xlarge", "4xlarge", "8xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c6gn": {
			  	"size": ["large", "medium", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r5dn": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "d3": {
			  	"size": ["xlarge", "2xlarge", "4xlarge", "8xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r6gd": {
			  	"size": ["large", "medium", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m4": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "10xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "z1d": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "3xlarge", "6xlarge", "12xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c5n": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "9xlarge", "18xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m6g": {
			  	"size": ["large", "medium", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r5n": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c5a": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "d3en": {
			  	"size": ["xlarge", "4xlarge", "8xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r5b": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m6gd": {
			  	"size": ["large", "medium", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r5d": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r5ad": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m5a": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "inf1": {
			  	"size": ["xlarge", "2xlarge", "6xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "t3": {
			  	"size": ["large", "medium", "micro", "nano", "small", "xlarge", "2xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m5d": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "t4g": {
			  	"size": ["large", "medium", "micro", "nano", "small", "xlarge", "2xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "g3": {
			  	"size": ["4xlarge", "8xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c5": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "9xlarge", "12xlarge", "18xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "t3a": {
			  	"size": ["large", "medium", "micro", "nano", "small", "xlarge", "2xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m5": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "a1": {
			  	"size": ["large", "medium", "metal", "xlarge", "2xlarge", "4xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c6g": {
			  	"size": ["large", "medium", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "c6gd": {
			  	"size": ["large", "medium", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "m5dn": {
			  	"size": ["large", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "p3": {
			  	"size": ["2xlarge", "8xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "r6g": {
			  	"size": ["large", "medium", "metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "g4dn": {
			  	"size": ["metal", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "x1": {
			  	"size": ["16xlarge", "32xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "p2": {
			  	"size": ["xlarge", "8xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "f1": {
			  	"size": ["2xlarge", "4xlarge", "16xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "g3s": {
			  	"size": ["xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "p4d": {
			  	"size": ["24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  },
			  "p3dn": {
			  	"size": ["24xlarge"],
			  	"platform": [ "Linux", "Windows", "Suse", "Rhel"]
			  }
			}
		}, 
		"RDS": {
			"type": {
			  "r5": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"],
			  	"platform": ["postgres", "sql", "mysql"]
			  },
			  "t3": {
			  	"size": ["large", "medium", "micro", "small", "xlarge", "2xlarge"],
			  	"platform": ["postgres", "sql", "mysql"]
			  },
			  "t2": {
			  	"size": ["large", "medium", "micro", "small", "xlarge", "2xlarge"],
			  	"platform": ["postgres", "sql", "mysql"]
			  },
			  "m4": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "10xlarge", "16xlarge"],
			  	"platform": ["postgres", "sql", "mysql"]
			  },
			  "m6g": {
			  	"platform": ["postgres", "sql", "mysql"],
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"]
			  },
			  "m5": {
			  	"platform": ["postgres", "sql", "mysql"],
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge", "24xlarge"]
			  },
			  "r6g": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "12xlarge", "16xlarge"],
			  	"platform": ["postgres", "sql", "mysql"]
			  },
			  "r4": {
			  	"size": ["large", "xlarge", "2xlarge", "4xlarge", "8xlarge", "16xlarge"],
			  	"platform": ["postgres", "sql", "mysql"]
			  }
		  	}
		}
	}
}
