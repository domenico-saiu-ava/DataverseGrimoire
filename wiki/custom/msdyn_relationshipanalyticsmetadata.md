---
logical: "msdyn_relationshipanalyticsmetadata"
display: "Metadati Analisi relazione"
entitySetName: "msdyn_relationshipanalyticsmetadatas"
primaryId: "msdyn_relationshipanalyticsmetadataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Metadati Analisi relazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_relationshipanalyticsmetadata` |
| Display name | Metadati Analisi relazione |
| Display (plural) | Metadati Analisi relazione |
| Schema name | `msdyn_relationshipanalyticsmetadata` |
| Entity set (Web API) | `msdyn_relationshipanalyticsmetadatas` |
| Primary id attribute | `msdyn_relationshipanalyticsmetadataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_relationshipanalyticsmetadatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_relationshipanalyticsmetadatas(<guid>)
POST /api/data/v9.2/msdyn_relationshipanalyticsmetadatas
PATCH /api/data/v9.2/msdyn_relationshipanalyticsmetadatas(<guid>)
DELETE /api/data/v9.2/msdyn_relationshipanalyticsmetadatas(<guid>)
```

## Attributes

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_absoluteemailweight`, `msdyn_absolutemeetingweight`, `msdyn_absolutephonecallweight`, `msdyn_absolutetaskweight`, `msdyn_communicationfrequency`, `msdyn_fairhealththreshold`, `msdyn_goodhealththreshold`, `msdyn_healthenabled`, `msdyn_healthscoresdistribution`, `msdyn_name`, `msdyn_provisioningstatus`, `msdyn_relationshipanalyticsmetadataid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_relationshipanalyticsmetadata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_relationshipanalyticsmetadata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_relationshipanalyticsmetadata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_relationshipanalyticsmetadata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_relationshipanalyticsmetadata` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_relationshipanalyticsmetadata_SyncErrors` | [msdyn_relationshipanalyticsmetadata](msdyn_relationshipanalyticsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipanalyticsmetadata` |
| `msdyn_relationshipanalyticsmetadata_AsyncOperations` | [msdyn_relationshipanalyticsmetadata](msdyn_relationshipanalyticsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipanalyticsmetadata` |
| `msdyn_relationshipanalyticsmetadata_MailboxTrackingFolders` | [msdyn_relationshipanalyticsmetadata](msdyn_relationshipanalyticsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipanalyticsmetadata` |
| `msdyn_relationshipanalyticsmetadata_UserEntityInstanceDatas` | [msdyn_relationshipanalyticsmetadata](msdyn_relationshipanalyticsmetadata.md) | `objectid` | `objectid_msdyn_relationshipanalyticsmetadata` |
| `msdyn_relationshipanalyticsmetadata_ProcessSession` | [msdyn_relationshipanalyticsmetadata](msdyn_relationshipanalyticsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipanalyticsmetadata` |
| `msdyn_relationshipanalyticsmetadata_BulkDeleteFailures` | [msdyn_relationshipanalyticsmetadata](msdyn_relationshipanalyticsmetadata.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipanalyticsmetadata` |
| `msdyn_relationshipanalyticsmetadata_PrincipalObjectAttributeAccesses` | [msdyn_relationshipanalyticsmetadata](msdyn_relationshipanalyticsmetadata.md) | `objectid` | `objectid_msdyn_relationshipanalyticsmetadata` |


## Source

Generated from [msdyn_relationshipanalyticsmetadata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_relationshipanalyticsmetadata')) on 2026-05-07.