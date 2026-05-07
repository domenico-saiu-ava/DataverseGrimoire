---
logical: "msdyn_ocprovisioningstate"
display: "Stato provisioning"
entitySetName: "msdyn_ocprovisioningstates"
primaryId: "msdyn_ocprovisioningstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato provisioning

Stato provisioning

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocprovisioningstate` |
| Display name | Stato provisioning |
| Display (plural) | Stati provisioning |
| Schema name | `msdyn_ocprovisioningstate` |
| Entity set (Web API) | `msdyn_ocprovisioningstates` |
| Primary id attribute | `msdyn_ocprovisioningstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocprovisioningstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocprovisioningstates(<guid>)
POST /api/data/v9.2/msdyn_ocprovisioningstates
PATCH /api/data/v9.2/msdyn_ocprovisioningstates(<guid>)
DELETE /api/data/v9.2/msdyn_ocprovisioningstates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_errormessage`, `msdyn_name`, `msdyn_ocprovisioningstateid`, `msdyn_provisioningresponse`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocprovisioningstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocprovisioningstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocprovisioningstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocprovisioningstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocprovisioningstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocprovisioningstate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocprovisioningstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocprovisioningstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocprovisioningstate_SyncErrors` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_DuplicateMatchingRecord` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_DuplicateBaseRecord` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `baserecordid` | `baserecordid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_AsyncOperations` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_MailboxTrackingFolders` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_UserEntityInstanceDatas` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `objectid` | `objectid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_ProcessSession` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_BulkDeleteFailures` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocprovisioningstate` |
| `msdyn_ocprovisioningstate_PrincipalObjectAttributeAccesses` | [msdyn_ocprovisioningstate](msdyn_ocprovisioningstate.md) | `objectid` | `objectid_msdyn_ocprovisioningstate` |


## Source

Generated from [msdyn_ocprovisioningstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocprovisioningstate')) on 2026-05-07.