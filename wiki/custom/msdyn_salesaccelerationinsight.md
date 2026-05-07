---
logical: "msdyn_salesaccelerationinsight"
display: "Informazioni dettagliate Accelerazione delle vendite"
entitySetName: "msdyn_salesaccelerationinsights"
primaryId: "msdyn_salesaccelerationinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni dettagliate Accelerazione delle vendite

Informazioni dettagliate Accelerazione delle vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesaccelerationinsight` |
| Display name | Informazioni dettagliate Accelerazione delle vendite |
| Display (plural) | Informazioni dettagliate Accelerazione delle vendite |
| Schema name | `msdyn_salesaccelerationinsight` |
| Entity set (Web API) | `msdyn_salesaccelerationinsights` |
| Primary id attribute | `msdyn_salesaccelerationinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesaccelerationinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesaccelerationinsights(<guid>)
POST /api/data/v9.2/msdyn_salesaccelerationinsights
PATCH /api/data/v9.2/msdyn_salesaccelerationinsights(<guid>)
DELETE /api/data/v9.2/msdyn_salesaccelerationinsights(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_relatedrecord`, `msdyn_salesaccelerationinsightid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesaccelerationinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesaccelerationinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesaccelerationinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesaccelerationinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salesaccelerationinsight` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_salesaccelerationinsights_account` | [account](account.md) | `msdyn_relatedrecord` | `msdyn_relatedrecord` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesaccelerationinsight_SyncErrors` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_DuplicateMatchingRecord` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_DuplicateBaseRecord` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `baserecordid` | `baserecordid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_AsyncOperations` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_MailboxTrackingFolders` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_UserEntityInstanceDatas` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `objectid` | `objectid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_ProcessSession` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_BulkDeleteFailures` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesaccelerationinsight` |
| `msdyn_salesaccelerationinsight_PrincipalObjectAttributeAccesses` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `objectid` | `objectid_msdyn_salesaccelerationinsight` |
| `msdyn_insightsid_salesaccelerationinsights` | [msdyn_salesaccelerationinsight](msdyn_salesaccelerationinsight.md) | `msdyn_salesaccelerationinsightid` | `msdyn_salesaccelerationinsightid` |


## Source

Generated from [msdyn_salesaccelerationinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesaccelerationinsight')) on 2026-05-07.