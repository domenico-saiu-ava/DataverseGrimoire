---
logical: "msdyn_salescopilotusersetting"
display: "Sales Copilot User Setting"
entitySetName: "msdyn_salescopilotusersettings"
primaryId: "msdyn_salescopilotusersettingid"
primaryName: "msdyn_userid"
tableType: "Standard"
ownership: "None"
---

# Sales Copilot User Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotusersetting` |
| Display name | Sales Copilot User Setting |
| Display (plural) | Sales Copilot User Settings |
| Schema name | `msdyn_salescopilotusersetting` |
| Entity set (Web API) | `msdyn_salescopilotusersettings` |
| Primary id attribute | `msdyn_salescopilotusersettingid` |
| Primary name attribute | `msdyn_userid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotusersettings?$select=msdyn_userid&$top=10
GET /api/data/v9.2/msdyn_salescopilotusersettings(<guid>)
POST /api/data/v9.2/msdyn_salescopilotusersettings
PATCH /api/data/v9.2/msdyn_salescopilotusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotusersettings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_connectionname`, `msdyn_exchangeconsentgiven`, `msdyn_m365infradetails`, `msdyn_m365skillconsentgiven`, `msdyn_m365skillinfrastatus`, `msdyn_m365skillinfrastatuslastverifiedon`, `msdyn_nbaskillconsentgiven`, `msdyn_nbaskillinfradetails`, `msdyn_nbaskillinfrastatus`, `msdyn_nbaskillinfrastatuslastverifiedon`, `msdyn_salescopilotusersettingId`, `msdyn_userid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salescopilotusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotusersetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotusersetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotusersetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salescopilotusersetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salescopilotusersetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotusersetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salescopilotusersetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salescopilotusersetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salescopilotusersetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salescopilotusersetting.md) on 2026-05-06.