---
logical: "msdyn_usersetting"
display: "User settings"
entitySetName: "msdyn_usersettings"
primaryId: "msdyn_usersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# User settings

Parent entity for Omnichannel personalizations

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_usersetting` |
| Display name | User settings |
| Display (plural) | User settings |
| Schema name | `msdyn_usersetting` |
| Entity set (Web API) | `msdyn_usersettings` |
| Primary id attribute | `msdyn_usersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_usersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_usersettings(<guid>)
POST /api/data/v9.2/msdyn_usersettings
PATCH /api/data/v9.2/msdyn_usersettings(<guid>)
DELETE /api/data/v9.2/msdyn_usersettings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_callconnectedpingpreference`, `msdyn_defaultcountrycode`, `msdyn_hidetranscript`, `msdyn_name`, `msdyn_personalsoundenabled`, `msdyn_SoundFormControl`, `msdyn_usersettingId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_usersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_usersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_usersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_usersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_usersetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_usersetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usersetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usersetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usersetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_usersetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usersetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_usersetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_usersetting.md) on 2026-05-06.