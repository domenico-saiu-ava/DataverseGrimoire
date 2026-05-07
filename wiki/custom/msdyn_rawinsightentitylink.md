---
logical: "msdyn_rawinsightentitylink"
display: "msdyn_rawinsightentitylink"
entitySetName: "msdyn_rawinsightentitylinks"
primaryId: "msdyn_rawinsightentitylinkid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_rawinsightentitylink

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rawinsightentitylink` |
| Display name | msdyn_rawinsightentitylink |
| Display (plural) | msdyn_rawinsightentitylinks |
| Schema name | `msdyn_rawinsightentitylink` |
| Entity set (Web API) | `msdyn_rawinsightentitylinks` |
| Primary id attribute | `msdyn_rawinsightentitylinkid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rawinsightentitylinks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_rawinsightentitylinks(<guid>)
POST /api/data/v9.2/msdyn_rawinsightentitylinks
PATCH /api/data/v9.2/msdyn_rawinsightentitylinks(<guid>)
DELETE /api/data/v9.2/msdyn_rawinsightentitylinks(<guid>)
```

## Attributes

Writable: **21** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_crmactivityid`, `msdyn_externalcrmorgid`, `msdyn_insightindex`, `msdyn_insightname`, `msdyn_name`, `msdyn_processingretrycount`, `msdyn_processingstatus`, `msdyn_rawinsightentitylinkconfirmedby`, `msdyn_rawinsightentitylinkid`, `msdyn_rawinsightsourcegroupid`, `msdyn_rawinsightsourceid`, `msdyn_rawinsightsourcetype`, `msdyn_regardingentityid`, `msdyn_regardingentitytype`, `msdyn_relevancescore`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_rawinsightentitylink_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rawinsightentitylink_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rawinsightentitylink_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rawinsightentitylink_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_rawinsightentitylink` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rawinsightentitylink_SyncErrors` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_DuplicateMatchingRecord` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_DuplicateBaseRecord` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `baserecordid` | `baserecordid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_AsyncOperations` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_MailboxTrackingFolders` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_UserEntityInstanceDatas` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `objectid` | `objectid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_ProcessSession` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_BulkDeleteFailures` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawinsightentitylink` |
| `msdyn_rawinsightentitylink_PrincipalObjectAttributeAccesses` | [msdyn_rawinsightentitylink](msdyn_rawinsightentitylink.md) | `objectid` | `objectid_msdyn_rawinsightentitylink` |


## Source

Generated from [msdyn_rawinsightentitylink (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rawinsightentitylink')) on 2026-05-07.