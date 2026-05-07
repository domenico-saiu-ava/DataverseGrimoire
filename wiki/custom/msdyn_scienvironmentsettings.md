---
logical: "msdyn_scienvironmentsettings"
display: "EnvironmentSettings"
entitySetName: "msdyn_scienvironmentsettings"
primaryId: "msdyn_scienvironmentsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# EnvironmentSettings

SCI environment level settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_scienvironmentsettings` |
| Display name | EnvironmentSettings |
| Display (plural) | EnvironmentSettings |
| Schema name | `msdyn_scienvironmentsettings` |
| Entity set (Web API) | `msdyn_scienvironmentsettings` |
| Primary id attribute | `msdyn_scienvironmentsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_scienvironmentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_scienvironmentsettings(<guid>)
POST /api/data/v9.2/msdyn_scienvironmentsettings
PATCH /api/data/v9.2/msdyn_scienvironmentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_scienvironmentsettings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_azuresubscriptionid`, `msdyn_containername`, `msdyn_name`, `msdyn_repaudiochannel`, `msdyn_scienvironmentsettingsid`, `msdyn_storageaccountname`, `msdyn_trackedcompetitors`, `msdyn_trackedkeywords`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_scienvironmentsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scienvironmentsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scienvironmentsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scienvironmentsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_scienvironmentsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scienvironmentsettings_SyncErrors` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_DuplicateMatchingRecord` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_DuplicateBaseRecord` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `baserecordid` | `baserecordid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_AsyncOperations` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_MailboxTrackingFolders` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_UserEntityInstanceDatas` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `objectid` | `objectid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_ProcessSession` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_BulkDeleteFailures` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_scienvironmentsettings` |
| `msdyn_scienvironmentsettings_PrincipalObjectAttributeAccesses` | [msdyn_scienvironmentsettings](msdyn_scienvironmentsettings.md) | `objectid` | `objectid_msdyn_scienvironmentsettings` |


## Source

Generated from [msdyn_scienvironmentsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_scienvironmentsettings')) on 2026-05-07.